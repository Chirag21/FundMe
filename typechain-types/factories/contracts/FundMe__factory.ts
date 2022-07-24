/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { FundMe, FundMeInterface } from "../../contracts/FundMe";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "priceFeedAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "FundMe__NotOwner",
    type: "error",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "MINIMUM_USD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cheaperWithdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "fund",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "funder",
        type: "address",
      },
    ],
    name: "getAddressToAmountFunded",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getFunder",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPriceFeed",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200132e3803806200132e83398181016040528101906200003791906200011d565b3373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200014f565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000e582620000b8565b9050919050565b620000f781620000d8565b81146200010357600080fd5b50565b6000815190506200011781620000ec565b92915050565b600060208284031215620001365762000135620000b3565b5b6000620001468482850162000106565b91505092915050565b6080516111a76200018760003960008181610337015281816104ca015281816105a6015281816105f601526107e601526111a76000f3fe60806040526004361061007f5760003560e01c80639e87a5cd1161004e5780639e87a5cd14610135578063b60d428814610160578063be2693f01461016a578063d7b4750c146101745761008e565b80630343fb25146100985780633ccfd60b146100d55780636b69a592146100df578063893d20e81461010a5761008e565b3661008e5761008c6101b1565b005b6100966101b1565b005b3480156100a457600080fd5b506100bf60048036038101906100ba9190610adf565b6102ec565b6040516100cc9190610b25565b60405180910390f35b6100dd610335565b005b3480156100eb57600080fd5b506100f4610595565b6040516101019190610b25565b60405180910390f35b34801561011657600080fd5b5061011f6105a2565b60405161012c9190610b4f565b60405180910390f35b34801561014157600080fd5b5061014a6105ca565b6040516101579190610bc9565b60405180910390f35b6101686101b1565b005b6101726105f4565b005b34801561018057600080fd5b5061019b60048036038101906101969190610c10565b6108b2565b6040516101a89190610b4f565b60405180910390f35b681b1ae4d6e2ef5000006101f0600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16346108f990919063ffffffff16565b1015610231576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022890610c9a565b60405180910390fd5b6000339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102e39190610ce9565b92505081905550565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103ba576040517f579610db00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b6000805490508110156104655760008082815481106103df576103de610d3f565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050808061045d90610d6e565b9150506103bd565b50600067ffffffffffffffff81111561048157610480610db7565b5b6040519080825280602002602001820160405280156104af5781602001602082028036833780820191505090505b50600090805190602001906104c59291906109d5565b5060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff164760405161050c90610e17565b60006040518083038185875af1925050503d8060008114610549576040519150601f19603f3d011682016040523d82523d6000602084013e61054e565b606091505b5050905080610592576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058990610e78565b60405180910390fd5b50565b681b1ae4d6e2ef50000081565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610679576040517f579610db00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000808054806020026020016040519081016040528092919081815260200182805480156106fc57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116106b2575b5050505050905060005b81518110156107815760006001600084848151811061072857610727610d3f565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550808061077990610d6e565b915050610706565b50600067ffffffffffffffff81111561079d5761079c610db7565b5b6040519080825280602002602001820160405280156107cb5781602001602082028036833780820191505090505b50600090805190602001906107e19291906109d5565b5060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff164760405161082890610e17565b60006040518083038185875af1925050503d8060008114610865576040519150601f19603f3d011682016040523d82523d6000602084013e61086a565b606091505b50509050806108ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a590610e78565b60405180910390fd5b5050565b60008082815481106108c7576108c6610d3f565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60008061090583610935565b90506000670de0b6b3a7640000858361091e9190610e98565b6109289190610f21565b9050809250505092915050565b6000808273ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b15801561097e57600080fd5b505afa158015610992573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b69190610fdf565b5050509150506402540be400816109cd919061105a565b915050919050565b828054828255906000526020600020908101928215610a4e579160200282015b82811115610a4d5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550916020019190600101906109f5565b5b509050610a5b9190610a5f565b5090565b5b80821115610a78576000816000905550600101610a60565b5090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610aac82610a81565b9050919050565b610abc81610aa1565b8114610ac757600080fd5b50565b600081359050610ad981610ab3565b92915050565b600060208284031215610af557610af4610a7c565b5b6000610b0384828501610aca565b91505092915050565b6000819050919050565b610b1f81610b0c565b82525050565b6000602082019050610b3a6000830184610b16565b92915050565b610b4981610aa1565b82525050565b6000602082019050610b646000830184610b40565b92915050565b6000819050919050565b6000610b8f610b8a610b8584610a81565b610b6a565b610a81565b9050919050565b6000610ba182610b74565b9050919050565b6000610bb382610b96565b9050919050565b610bc381610ba8565b82525050565b6000602082019050610bde6000830184610bba565b92915050565b610bed81610b0c565b8114610bf857600080fd5b50565b600081359050610c0a81610be4565b92915050565b600060208284031215610c2657610c25610a7c565b5b6000610c3484828501610bfb565b91505092915050565b600082825260208201905092915050565b7f446964206e6f742073656e6420656e6f75676821000000000000000000000000600082015250565b6000610c84601483610c3d565b9150610c8f82610c4e565b602082019050919050565b60006020820190508181036000830152610cb381610c77565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610cf482610b0c565b9150610cff83610b0c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610d3457610d33610cba565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000610d7982610b0c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610dac57610dab610cba565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600081905092915050565b50565b6000610e01600083610de6565b9150610e0c82610df1565b600082019050919050565b6000610e2282610df4565b9150819050919050565b7f43616c6c206661696c6564000000000000000000000000000000000000000000600082015250565b6000610e62600b83610c3d565b9150610e6d82610e2c565b602082019050919050565b60006020820190508181036000830152610e9181610e55565b9050919050565b6000610ea382610b0c565b9150610eae83610b0c565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610ee757610ee6610cba565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610f2c82610b0c565b9150610f3783610b0c565b925082610f4757610f46610ef2565b5b828204905092915050565b600069ffffffffffffffffffff82169050919050565b610f7181610f52565b8114610f7c57600080fd5b50565b600081519050610f8e81610f68565b92915050565b6000819050919050565b610fa781610f94565b8114610fb257600080fd5b50565b600081519050610fc481610f9e565b92915050565b600081519050610fd981610be4565b92915050565b600080600080600060a08688031215610ffb57610ffa610a7c565b5b600061100988828901610f7f565b955050602061101a88828901610fb5565b945050604061102b88828901610fca565b935050606061103c88828901610fca565b925050608061104d88828901610f7f565b9150509295509295909350565b600061106582610f94565b915061107083610f94565b9250827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821160008413600084131616156110af576110ae610cba565b5b817f800000000000000000000000000000000000000000000000000000000000000005831260008412600084131616156110ec576110eb610cba565b5b827f8000000000000000000000000000000000000000000000000000000000000000058212600084136000841216161561112957611128610cba565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff058212600084126000841216161561116657611165610cba565b5b82820290509291505056fea264697066735822122012810116e47efb4801856e6a01fc002cbf872681cbd3f19c159f641a0589f53864736f6c63430008090033";

type FundMeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FundMeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FundMe__factory extends ContractFactory {
  constructor(...args: FundMeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    priceFeedAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FundMe> {
    return super.deploy(priceFeedAddress, overrides || {}) as Promise<FundMe>;
  }
  override getDeployTransaction(
    priceFeedAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(priceFeedAddress, overrides || {});
  }
  override attach(address: string): FundMe {
    return super.attach(address) as FundMe;
  }
  override connect(signer: Signer): FundMe__factory {
    return super.connect(signer) as FundMe__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FundMeInterface {
    return new utils.Interface(_abi) as FundMeInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): FundMe {
    return new Contract(address, _abi, signerOrProvider) as FundMe;
  }
}
