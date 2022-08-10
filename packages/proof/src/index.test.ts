import { Group } from "@semaphore-anchor/group"
import { Identity } from "@semaphore-anchor/identity"
import download from "download"
import { getCurveFromName } from "ffjavascript"
import fs from "fs"
import generateNullifierHash from "./generateNullifierHash"
import generateProof from "./generateProof"
import generateSignalHash from "./generateSignalHash"
import packToSolidityProof from "./packToSolidityProof"
import { FullProof } from "./types"
import verifyProof from "./verifyProof"

describe("Proof", () => {
    const treeDepth = 20
    const circuitLength = 2

    const externalNullifier = "1"
    const signal = "0x111"
    const chainID = BigInt(1099511629113);

    const snarkArtifactsPath = `./packages/proof/snark-artifacts/${treeDepth}/${circuitLength}`;
    const snarkArtifactsUrl = `https://semaphore-fixtures.s3.amazonaws.com/${treeDepth}/${circuitLength}`;
    console.log(snarkArtifactsPath)

    const identity = new Identity(chainID)
    const identityCommitment = identity.generateCommitment()

    let fullProof: FullProof
    let curve: any

    beforeAll(async () => {
        curve = await getCurveFromName("bn128")

        // const url = `https://semaphore-fixtures.s3.amazonaws.com/${treeDepth}/${circuitLength}`

        if (!fs.existsSync(snarkArtifactsPath)) {
            fs.mkdirSync(snarkArtifactsPath, { recursive: true })
        }

        if (!fs.existsSync(`${snarkArtifactsPath}/circuit_final.zkey`)) {
            // await download(`https://semaphore-fixtures.s3.amazonaws.com/20/2/semaphore_20_2.wasm`)
            await download(`${snarkArtifactsUrl}/semaphore_${treeDepth}_${circuitLength}.wasm`, snarkArtifactsPath)
            await download(`${snarkArtifactsUrl}/circuit_final.zkey`, snarkArtifactsPath)
            await download(`${snarkArtifactsUrl}/verification_key.json`, snarkArtifactsPath)
        }
    }, 10000)

    afterAll(async () => {
        await curve.terminate()
    })

    describe("# generateProof", () => {
        it("Should not generate Semaphore proofs if the identity is not part of the group", async () => {
            const group = new Group(treeDepth)

            group.addMembers([BigInt(1), BigInt(2)])

            const fun = () =>
                generateProof(identity, group, externalNullifier, signal, {
                    wasmFilePath: `${snarkArtifactsPath}/semaphore_${treeDepth}_${circuitLength}.wasm`,
                    zkeyFilePath: `${snarkArtifactsPath}/circuit_final.zkey`
                })

            await expect(fun).rejects.toThrow("The identity is not part of the group")
        })

        // it("Should not generate a Semaphore proof with default snark artifacts with Node.js", async () => {
        //     const group = new Group(treeDepth)
        //
        //     group.addMembers([BigInt(1), BigInt(2), identityCommitment])
        //
        //     const fun = () => generateProof(identity, group, externalNullifier, signal, {})
        //
        //     await expect(fun).rejects.toThrow("ENOENT: no such file or directory")
        // })

        it("Should generate a Semaphore proof passing a group as parameter", async () => {
            const group = new Group(treeDepth)

            group.addMembers([BigInt(1), BigInt(2), identityCommitment])

            fullProof = await generateProof(identity, group, externalNullifier, signal, {
                wasmFilePath: `${snarkArtifactsPath}/semaphore_${treeDepth}_${circuitLength}.wasm`,
                zkeyFilePath: `${snarkArtifactsPath}/circuit_final.zkey`
            })

            expect(typeof fullProof).toBe("object")
            expect(fullProof.publicSignals.externalNullifier).toBe(externalNullifier)
            expect(fullProof.publicSignals.roots[0]).toBe(group.root.toString())
        }, 20000)

        it("Should generate a Semaphore proof passing a Merkle proof as parametr", async () => {
            const group = new Group(treeDepth)

            group.addMembers([BigInt(1), BigInt(2), identityCommitment])

            fullProof = await generateProof(identity, group, externalNullifier, signal, {
                wasmFilePath: `${snarkArtifactsPath}/semaphore_${treeDepth}_${circuitLength}.wasm`,
                zkeyFilePath: `${snarkArtifactsPath}/circuit_final.zkey`
            })

            expect(typeof fullProof).toBe("object")
            expect(fullProof.publicSignals.externalNullifier).toBe(externalNullifier)
            expect(fullProof.publicSignals.roots[0]).toBe(group.root.toString())
        }, 20000)
    })

    describe("# generateSignalHash", () => {
        it("Should generate a valid signal hash", async () => {
            const signalHash = generateSignalHash(signal)

            expect(signalHash.toString()).toBe(fullProof.publicSignals.signalHash)
        })
    })

    describe("# generateNullifierHash", () => {
        it("Should generate a valid nullifier hash", async () => {
            const nullifierHash = generateNullifierHash(externalNullifier, identity.getNullifier(), chainID)

            expect(nullifierHash.toString()).toBe(fullProof.publicSignals.nullifierHash)
        })
    })

    describe("# packToSolidityProof", () => {
        it("Should return a Solidity proof", async () => {
            const solidityProof = packToSolidityProof(fullProof.proof)

            expect(solidityProof).toHaveLength(8)
        })
    })

    describe("# verifyProof", () => {
        it("Should generate and verify a Semaphore proof", async () => {
            const verificationKey = JSON.parse(fs.readFileSync(`${snarkArtifactsPath}/verification_key.json`, "utf-8"))

            const response = await verifyProof(verificationKey, fullProof)

            expect(response).toBe(true)
        })
    })
})
