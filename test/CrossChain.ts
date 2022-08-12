// Copyright 2022 Webb Technologies Inc.
// SPDX-License-Identifier: Apache-2.0
import { expect } from "chai"
import { FullProof, generateProof, packToSolidityProof, SolidityProof } from "@semaphore-anchor/proof/"
import { Provider } from "@ethersproject/abstract-provider";
import { constants, Signer, ContractFactory, utils, Wallet, BigNumber, providers } from "ethers"
import { readFileSync} from "fs"
import { Server } from "ganache"
import "@ethersproject/shims"
import { toFixedHex, createRootsBytes, createIdentities } from "./utils"
import { Semaphore as SemaphoreContract, Verifier20_2 } from "../typechain"
import { startGanacheServer, deployContracts } from "./utils";
import { private_keys as ganacheAccounts } from "../accounts.json";

describe("cross-chain", () => {
    let verifierA: Verifier20_2
    let verifierB: Verifier20_2
    let contract: SemaphoreContract
    let signersA: Signer[]
    let signersB: Signer[]
    // let providerA: Provider
    // let providerB: Provider
    let accounts: string[]
    let ganacheA: Server
    let ganacheB: Server

    let providerA = new providers.JsonRpcProvider("http://127.0.0.1:8545");
    let providerB = new providers.JsonRpcProvider("http://127.0.0.1:8546");
    const treeDepth = Number(process.env.TREE_DEPTH) | 20
    const circuitLength = Number(process.env.CIRCUIT_LENGTH) | 2
    const groupId = 1
    const maxEdges = 1
    const chainID = 1099511629113
    const zeroValue = BigInt("21663839004416932945382355908790599225266501822907911457504978515578255421292")
    const { identities, members } = createIdentities(chainID, 3)

    // const privKeys = ganacheAccounts.map(secretKey => secretKey["secretKey"])
    // signersA = ganacheAccounts.map(secretKey => new Wallet(secretKey["secretKey"]))
    // signersB = ganacheAccounts.map(secretKey => new Wallet(secretKey["secretKey"]))
    // const pubKeys = Array.from(addresses.map(() => ()))
    // TODO: add RPC's URL to env variables

    // const wasmFilePath = `${config.paths.build["snark-artifacts"]}/${treeDepth}/2/semaphore_20_2.wasm`
    // const zkeyFilePath = `${config.paths.build["snark-artifacts"]}/${treeDepth}/2/circuit_final.zkey`

    before(async () => {

        console.log(providerA)
        console.log(providerB)
        signersA = ganacheAccounts.map(ganacheAccount => new Wallet(ganacheAccount["secretKey"], providerA))
        signersB = ganacheAccounts.map(ganacheAccount => new Wallet(ganacheAccount["secretKey"], providerB))
        // /home/semar/Projects/webb/semaphore.js/contracts/verifiers/Verifier20_2.sol/Verifier20_2.json
        const metadataDir = './contracts'
        await deployContracts(metadataDir, signersA[0], signersB[0])
        // let res = await deployVerifierContracts(metadataDir, signersA[0], signersB[0])
        // console.log(res)
    })
    describe("# createGroup", () => {
        it("Should not create a group if the tree depth is not supported", async () => {
            const transaction = contract.createGroup(groupId, 10, 0, accounts[0], maxEdges)

            await expect(providerA !== undefined)    
        })
    })  
})
