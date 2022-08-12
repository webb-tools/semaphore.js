/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export interface ChainIdWithTypeInterface extends utils.Interface {
  functions: {
    "EVM_CHAIN_ID_TYPE()": FunctionFragment;
    "getChainId()": FunctionFragment;
    "getChainIdType()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "EVM_CHAIN_ID_TYPE"
      | "getChainId"
      | "getChainIdType"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "EVM_CHAIN_ID_TYPE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getChainIdType",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "EVM_CHAIN_ID_TYPE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getChainIdType",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ChainIdWithType extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ChainIdWithTypeInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    EVM_CHAIN_ID_TYPE(overrides?: CallOverrides): Promise<[string]>;

    getChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    getChainIdType(overrides?: CallOverrides): Promise<[number]>;
  };

  EVM_CHAIN_ID_TYPE(overrides?: CallOverrides): Promise<string>;

  getChainId(overrides?: CallOverrides): Promise<BigNumber>;

  getChainIdType(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    EVM_CHAIN_ID_TYPE(overrides?: CallOverrides): Promise<string>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    getChainIdType(overrides?: CallOverrides): Promise<number>;
  };

  filters: {};

  estimateGas: {
    EVM_CHAIN_ID_TYPE(overrides?: CallOverrides): Promise<BigNumber>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    getChainIdType(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    EVM_CHAIN_ID_TYPE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getChainIdType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
