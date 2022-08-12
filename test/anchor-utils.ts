import { Identity } from "@semaphore-anchor/identity"
import { BigNumber, BigNumberish } from "@ethersproject/bignumber"
import { randomBytes } from "@ethersproject/random"
import { sha256 as _sha256 } from "@ethersproject/sha2"
import { toUtf8Bytes } from "@ethersproject/strings"

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