/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface PaperInterface extends ethers.utils.Interface {
  functions: {
    "addReview(bool,string)": FunctionFragment;
    "getIpfsHash()": FunctionFragment;
    "getOwner()": FunctionFragment;
    "getReviews()": FunctionFragment;
    "ipfsHash()": FunctionFragment;
    "owner()": FunctionFragment;
    "reviewers(uint256)": FunctionFragment;
    "reviews(address)": FunctionFragment;
    "status()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addReview",
    values: [boolean, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getIpfsHash",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getReviews",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ipfsHash", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "reviewers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "reviews", values: [string]): string;
  encodeFunctionData(functionFragment: "status", values?: undefined): string;

  decodeFunctionResult(functionFragment: "addReview", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getIpfsHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getReviews", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ipfsHash", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reviewers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reviews", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "status", data: BytesLike): Result;

  events: {};
}

export class Paper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PaperInterface;

  functions: {
    addReview(
      _review: boolean,
      comment: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getIpfsHash(overrides?: CallOverrides): Promise<[string]>;

    getOwner(overrides?: CallOverrides): Promise<[string]>;

    getReviews(
      overrides?: CallOverrides
    ): Promise<
      [([boolean, string] & { decision: boolean; comment: string })[]]
    >;

    ipfsHash(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    reviewers(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    reviews(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { decision: boolean; comment: string }>;

    status(overrides?: CallOverrides): Promise<[string]>;
  };

  addReview(
    _review: boolean,
    comment: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getIpfsHash(overrides?: CallOverrides): Promise<string>;

  getOwner(overrides?: CallOverrides): Promise<string>;

  getReviews(
    overrides?: CallOverrides
  ): Promise<([boolean, string] & { decision: boolean; comment: string })[]>;

  ipfsHash(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  reviewers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  reviews(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[boolean, string] & { decision: boolean; comment: string }>;

  status(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addReview(
      _review: boolean,
      comment: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getIpfsHash(overrides?: CallOverrides): Promise<string>;

    getOwner(overrides?: CallOverrides): Promise<string>;

    getReviews(
      overrides?: CallOverrides
    ): Promise<([boolean, string] & { decision: boolean; comment: string })[]>;

    ipfsHash(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    reviewers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    reviews(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { decision: boolean; comment: string }>;

    status(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    addReview(
      _review: boolean,
      comment: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getIpfsHash(overrides?: CallOverrides): Promise<BigNumber>;

    getOwner(overrides?: CallOverrides): Promise<BigNumber>;

    getReviews(overrides?: CallOverrides): Promise<BigNumber>;

    ipfsHash(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    reviewers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    reviews(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    status(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addReview(
      _review: boolean,
      comment: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getIpfsHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getReviews(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ipfsHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reviewers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    reviews(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    status(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}