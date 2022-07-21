/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  FunWithStorage,
  FunWithStorageInterface,
} from "../../../contracts/test/FunWithStorage";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "doStuff",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506100437f60b22b24b0fa8ab15ed53b490a71cc7eb38645c1f8aa2803ad8223e5d2c6033960001b6102bd60201b60201c565b6100757f94dbc471ff8e31a408081d3dc6bd7e1634dfb4ffdd0aaea77a14b6a471fe61dd60001b6102bd60201b60201c565b6100a77f0a0b4ab249fed944d4b46bea9e8cd2c9401333c8fe76aa9bf6cafbc26920889060001b6102bd60201b60201c565b60196000819055506100e17fb6d05820690fa9adbeceb73da665e38e20319d6b6f733c39ad18cdd351bb1ee160001b6102bd60201b60201c565b6101137f3b0eaee5c9768344467541e69bb4571d817ac7e140176a41b924dfa0d7ff203360001b6102bd60201b60201c565b60018060006101000a81548160ff02191690831515021790555061015f7f180e93dec6141b82e1149ab10c104b34e4176aa562fa93c0e8e45aebb63c9c6160001b6102bd60201b60201c565b6101917faaf5e9755c5ad13685ec1328487fdb9ecf85ed46c4489ea49ff6a0959d561bac60001b6102bd60201b60201c565b600260de90806001815401808255809150506001900390600052602060002001600090919091909150556101ed7f92bb336079f63bce4a5cfcaec79efe42666d694a7497919fc83d0cd142e1de7660001b6102bd60201b60201c565b61021f7f35278d7b7b0feec1ab9545bd7c0740154f3df7d220f0c75f86cedd2c9354242b60001b6102bd60201b60201c565b60016003600080815260200190815260200160002060006101000a81548160ff02191690831515021790555061027d7f989fd8912e9547381cf320d396d55b6114f55b2ab9eea1d0760ef600aa62ed8d60001b6102bd60201b60201c565b6102af7f8a14a6315e49434d3c584186cacf736cd66f7a1f29d9873cdef70177baa2000c60001b6102bd60201b60201c565b607b608081815250506102c0565b50565b6080516102096102d8600039600050506102096000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063874f33a114610030575b600080fd5b61003861003a565b005b6100667f01907b961e5465d0fdf43701f6a94da6ff3d77c9e8330e516364273a09f63dc260001b610141565b6100927fd9d8e725b1c3950659e1365cb194d10aa60c6d197df2293a003d50dcdbe3ce9960001b610141565b6100be7f094d736ba4d5b9f7c7ef3492d05c12214385ff3c4f727f6fa02f71c053a4df1660001b610141565b600060016000546100cf919061017d565b90506100fd7f4a9b7e800732cddc986e4b6f84a79a0ac81c5b054aba62762cac6cf744077e3060001b610141565b6101297f3c1d714019694d2911899c91b7f630c38787cbaedb59c850da4ea1bcc278d13d60001b610141565b6000600160009054906101000a900460ff1690505050565b50565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061018882610144565b915061019383610144565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156101c8576101c761014e565b5b82820190509291505056fea264697066735822122048474d808870f4ae80cbda823f750169d3506dfd3591c05eb0957d200ccf18ac64736f6c63430008090033";

type FunWithStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FunWithStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FunWithStorage__factory extends ContractFactory {
  constructor(...args: FunWithStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FunWithStorage> {
    return super.deploy(overrides || {}) as Promise<FunWithStorage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FunWithStorage {
    return super.attach(address) as FunWithStorage;
  }
  override connect(signer: Signer): FunWithStorage__factory {
    return super.connect(signer) as FunWithStorage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FunWithStorageInterface {
    return new utils.Interface(_abi) as FunWithStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FunWithStorage {
    return new Contract(address, _abi, signerOrProvider) as FunWithStorage;
  }
}
