/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ISemaphore,
  ISemaphoreInterface,
} from "../../../contracts/interfaces/ISemaphore";

const _abi = [
  {
    inputs: [],
    name: "Semaphore__CallerIsNotTheGroupAdmin",
    type: "error",
  },
  {
    inputs: [],
    name: "Semaphore__TreeDepthIsNotSupported",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldAdmin",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "GroupAdminUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "signal",
        type: "bytes32",
      },
    ],
    name: "ProofVerified",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "identityCommitment",
        type: "uint256",
      },
    ],
    name: "addMember",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "depth",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "zeroValue",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "maxEdges",
        type: "uint8",
      },
    ],
    name: "createGroup",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "identityCommitment",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "proofSiblings",
        type: "uint256[]",
      },
      {
        internalType: "uint8[]",
        name: "proofPathIndices",
        type: "uint8[]",
      },
    ],
    name: "removeMember",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "updateGroupAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "signal",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "nullifierHash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "externalNullifier",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "roots",
        type: "bytes",
      },
      {
        internalType: "uint256[8]",
        name: "proof",
        type: "uint256[8]",
      },
    ],
    name: "verifyProof",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ISemaphore__factory {
  static readonly abi = _abi;
  static createInterface(): ISemaphoreInterface {
    return new utils.Interface(_abi) as ISemaphoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISemaphore {
    return new Contract(address, _abi, signerOrProvider) as ISemaphore;
  }
}
