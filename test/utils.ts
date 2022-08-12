import { BigNumber, BigNumberish } from "@ethersproject/bignumber"
import { randomBytes } from "@ethersproject/random"
import { sha256 as _sha256 } from "@ethersproject/sha2"
import { toUtf8Bytes } from "@ethersproject/strings"
import { Signer, ContractFactory, Contract } from "ethers"
// import { getContractFactory } from "@nomiclabs/hardhat-ethers"
import "@nomiclabs/hardhat-ethers"
import ganache from 'ganache';
import { readFileSync} from "fs"
import { poseidon_gencontract as poseidonContract } from "circomlibjs"
import { Identity } from "@semaphore-anchor/identity"

export type GanacheAccounts = {
  balance: string;
  secretKey: string;
};
export type CrossChainContract = {
  contractA: Contract;
  contractB: Contract
};
export async function deployVerifierContracts(metadataPath: string, signerA: Signer, signerB: Signer, deploy_argsA: any={}, deploy_argsB: any={}): Promise<CrossChainContract> {
    const metadata = JSON.parse(readFileSync(metadataPath).toString())
    // console.log(verifier202Metadata)
    const factoryA = new ContractFactory(metadata.abi, metadata.bytecode, signerA)
    const factoryB = new ContractFactory(metadata.abi, metadata.bytecode, signerB)
    // console.log(verifier202Factory)
    const contractA = await factoryA.deploy(deploy_argsA)
    const contractB = await factoryB.deploy(deploy_argsB)
    // console.log(contractA)
    await contractA.deployed()
    await contractB.deployed()
    return {contractA, contractB}
}

export async function deployMetaVerifierContract(metadataPath: string, signerA: Signer, signerB: Signer, verifier1Cross: CrossChainContract, verifier2Cross: CrossChainContract): Promise<CrossChainContract> {
    const metadata = JSON.parse(readFileSync(metadataPath).toString())
    // console.log(verifier202Metadata)
    const factoryA = new ContractFactory(metadata.abi, metadata.bytecode, signerA)
    const factoryB = new ContractFactory(metadata.abi, metadata.bytecode, signerB)
    // console.log(verifier202Factory)
    const contractA = await factoryA.deploy(verifier1Cross.contractA.address, verifier2Cross.contractA.address)
    const contractB = await factoryB.deploy(verifier1Cross.contractB.address, verifier2Cross.contractB.address)
    // console.log(contractA)
    await contractA.deployed()
    await contractB.deployed()

    return {contractA, contractB}
}

// export async function deployContracts(metadataDir: string, signerA: Signer, signerB: Signer){
//     const poseidonABI = poseidonContract.generateABI(2)
//     const poseidonBytecode = poseidonContract.createCode(2)
//     const poseidonFactoryA = new ContractFactory(poseidonABI, poseidonBytecode, signerA)
//     const poseidonFactoryB = new ContractFactory(poseidonABI, poseidonBytecode, signerB)
//     const poseidonA = await poseidonFactoryA.deploy()
//     const poseidonB = await poseidonFactoryB.deploy()
//     await poseidonA.deployed();
//     await poseidonB.deployed();
//
//     const metadataVerifier1 = `${metadataDir}/verifiers/Verifier20_2.sol/Verifier20_2.json`
//     const metadataVerifier2 = `${metadataDir}/verifiers/Verifier20_7.sol/Verifier20_7.json`
//     const metadataMetaVerifier = `${metadataDir}/verifiers/SemaphoreVerifier.sol/SemaphoreVerifier.json`
//
//     const verifier1Cross: CrossChainContract = await deployVerifierContracts(metadataVerifier1, signerA, signerB)
//     const verifier2Cross: CrossChainContract = await deployVerifierContracts(metadataVerifier2, signerA, signerB)
//     const metaVerifierCross: CrossChainContract = await deployMetaVerifierContract(metadataMetaVerifier, signerA, signerB, verifier1Cross, verifier2Cross)
//     // console.log(verifier1Cross)
//     // console.log(verifier2Cross)
//     // console.log(metaVerifierCross)
//
//     const metadataLinkableTree = `${metadataDir}/base/LinkableIncrementalBinaryTree.sol/LinkableIncrementalBinaryTree.json`
//     const linkableTreeCross: CrossChainContract = await deployVerifierContracts(metadataLinkableTree, signerA, signerB)
//     // console.log(linkableTreeCross)
//
//     const metadataInputEncoder = `${metadataDir}/base/SemaphoreInputEncoder.sol/SemaphoreInputEncoder.json`
//     const InputEncoderCross: CrossChainContract = await deployVerifierContracts(metadataLinkableTree, signerA, signerB)
//     // console.log(InputEncoderCross)
//     // return {contractA, contractB}
//     // return 
//     const metadataSemaphore = `${metadataDir}/Semaphore.sol/Semaphore.json`
//     const Semaphore: CrossChainContract = await deployVerifierContracts(metadataSemaphore, signerA, signerB)
//     console.log("SEMAPHORE")
//     console.log(Semaphore)
// }

export async function deployContracts(metadataDir: string, signerA: Signer, signerB: Signer){
    const poseidonABI = poseidonContract.generateABI(2)
    const poseidonBytecode = poseidonContract.createCode(2)
    const poseidonFactoryA = new ContractFactory(poseidonABI, poseidonBytecode, signerA)
    const poseidonFactoryB = new ContractFactory(poseidonABI, poseidonBytecode, signerB)
    const poseidonA = await poseidonFactoryA.deploy()
    const poseidonB = await poseidonFactoryB.deploy()
    await poseidonA.deployed();
    await poseidonB.deployed();

    const metadataVerifier1 = `${metadataDir}/verifiers/Verifier20_2.sol/Verifier20_2.json`
    const metadataVerifier2 = `${metadataDir}/verifiers/Verifier20_7.sol/Verifier20_7.json`
    const metadataMetaVerifier = `${metadataDir}/verifiers/SemaphoreVerifier.sol/SemaphoreVerifier.json`
    const metadataLinkableTree = `${metadataDir}/base/LinkableIncrementalBinaryTree.sol/LinkableIncrementalBinaryTree.json`
    const metadataInputEncoder = `${metadataDir}/base/SemaphoreInputEncoder.sol/SemaphoreInputEncoder.json`
    const metadataSemaphore = `${metadataDir}/Semaphore.sol/Semaphore.json`

    const LinkableTreeFactoryA = await ethers.getContractFactory(
            "LinkableIncrementalBinaryTree",
            signerA
        )
    const LinkableTreeA = await LinkableTreeFactoryA.deploy()
    const LinkableTreeFactoryB = await ethers.getContractFactory(
            "LinkableIncrementalBinaryTree",
            signerB
        )
    const LinkableTreeB = await LinkableTreeFactoryB.deploy()


    console.log("SEMAPHORE")
    console.log(LinkableTreeB)
}

export async function startGanacheServer (
  port: number,
  networkId: number,
  populatedAccounts: GanacheAccounts[],
  options: any = {}
) {
  const ganacheServer = ganache.server({
    accounts: populatedAccounts,
    chainId: networkId,
    network_id: networkId,
    quiet: true,
    ...options
  });

  await ganacheServer.listen(port);
  console.log(`Ganache Started on http://127.0.0.1:${port} ..`);

  return ganacheServer;
}

export type VerifierContractInfo = {
    name: string
    address: string
    depth: string
    circuitLength: string
}
export function toFixedHex(number: BigNumberish, length = 32): string {
    return (
        "0x" +
        (number instanceof Buffer ? number.toString("hex") : BigNumber.from(number).toHexString().slice(2)).padStart(
            length * 2,
            "0"
        )
    )
}

export function createRootsBytes(rootArray: string[] | BigNumberish[]): string {
    let rootsBytes = "0x"
    for (let i = 0; i < rootArray.length; i++) {
        rootsBytes += toFixedHex(rootArray[i], 32).substr(2)
    }
    return rootsBytes // root byte string (32 * array.length bytes)
}
export function createIdentities(chainId: number, n: number): { identities: Identity[]; members: bigint[] } {
    const identityCommitments: bigint[] = []
    const identities: Identity[] = []

    for (let i = 0; i < n; i++) {
        const identity = new Identity(BigInt(chainId), i.toString())
        const identityCommitment = identity.generateCommitment()

        identities.push(identity)
        identityCommitments.push(identityCommitment)
    }

    return { identities, members: identityCommitments }
}

export function createIdentityCommitments(chainId: number, n: number): bigint[] {
    const identityCommitments: bigint[] = []

    for (let i = 0; i < n; i++) {
        const identity = new Identity(BigInt(chainId), i.toString())
        const identityCommitment = identity.generateCommitment()

        identityCommitments.push(identityCommitment)
    }

    return identityCommitments
}

/**
 * Returns an hexadecimal sha256 hash of the message passed as parameter.
 * @param message The string to hash.
 * @returns The hexadecimal hash of the message.
 */
export function sha256(message: string): string {
    const hash = _sha256(toUtf8Bytes(message))

    return hash
}

/**
 * Generates a random big number.
 * @param numberOfBytes The number of bytes of the number.
 * @returns The generated random number.
 */
export function genRandomNumber(numberOfBytes = 31): bigint {
    return BigNumber.from(randomBytes(numberOfBytes)).toBigInt()
}

/**
 * Checks if a string is a JSON.
 * @param jsonString The JSON string.
 * @returns True or false.
 */
export function isJsonArray(jsonString: string) {
    try {
        return Array.isArray(JSON.parse(jsonString))
    } catch (error) {
        return false
    }
}
