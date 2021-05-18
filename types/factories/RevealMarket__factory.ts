/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RevealMarket, RevealMarketInterface } from "../RevealMarket";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "revealer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "loc",
        type: "uint256",
      },
    ],
    name: "RevealBountyAnnounced",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "_a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "_b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "_c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[9]",
        name: "_input",
        type: "uint256[9]",
      },
    ],
    name: "createRevealBounty",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_verifierAddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_verifierAddress",
        type: "address",
      },
    ],
    name: "setVerifier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611426806100206000396000f3fe6080604052600436106100555760003560e01c8063357f90b91461005a5780635437988d14610076578063715018a61461009f5780638da5cb5b146100b6578063c4d66de8146100e1578063f2fde38b1461010a575b600080fd5b610074600480360381019061006f9190610cea565b610133565b005b34801561008257600080fd5b5061009d60048036038101906100989190610cc1565b6102a2565b005b3480156100ab57600080fd5b506100b4610362565b005b3480156100c257600080fd5b506100cb61049f565b6040516100d89190610fbd565b60405180910390f35b3480156100ed57600080fd5b5061010860048036038101906101039190610cc1565b6104c9565b005b34801561011657600080fd5b50610131600480360381019061012c9190610cc1565b6105ec565b005b606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d20293f0858585856040518563ffffffff1660e01b81526004016101949493929190611001565b602060405180830381600087803b1580156101ae57600080fd5b505af11580156101c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e69190610d4f565b610225576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161021c906110a8565b60405180910390fd5b7f23ef5a9e22150fb6c8dd4b7ebb66a91a2432e439a0b02a2645dbf29a7c490fe63382600060098110610281577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020151604051610294929190610fd8565b60405180910390a150505050565b6102aa610798565b73ffffffffffffffffffffffffffffffffffffffff166102c861049f565b73ffffffffffffffffffffffffffffffffffffffff161461031e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031590611088565b60405180910390fd5b80606560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61036a610798565b73ffffffffffffffffffffffffffffffffffffffff1661038861049f565b73ffffffffffffffffffffffffffffffffffffffff16146103de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d590611088565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600060019054906101000a900460ff16806104ef575060008054906101000a900460ff16155b61052e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052590611068565b60405180910390fd5b60008060019054906101000a900460ff16159050801561057e576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6105866107a0565b81606560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080156105e85760008060016101000a81548160ff0219169083151502179055505b5050565b6105f4610798565b73ffffffffffffffffffffffffffffffffffffffff1661061261049f565b73ffffffffffffffffffffffffffffffffffffffff1614610668576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065f90611088565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156106d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106cf90611048565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600033905090565b600060019054906101000a900460ff16806107c6575060008054906101000a900460ff16155b610805576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107fc90611068565b60405180910390fd5b60008060019054906101000a900460ff161590508015610855576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b61085d610889565b610865610962565b80156108865760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff16806108af575060008054906101000a900460ff16155b6108ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e590611068565b60405180910390fd5b60008060019054906101000a900460ff16159050801561093e576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b801561095f5760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff1680610988575060008054906101000a900460ff16155b6109c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109be90611068565b60405180910390fd5b60008060019054906101000a900460ff161590508015610a17576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6000610a21610798565b905080603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3508015610ae15760008060016101000a81548160ff0219169083151502179055505b50565b6000610af7610af2846110ed565b6110c8565b90508082856040860282011115610b0d57600080fd5b60005b85811015610b3d5781610b238882610c49565b845260208401935060408301925050600181019050610b10565b5050509392505050565b6000610b5a610b5584611113565b6110c8565b90508082856020860282011115610b7057600080fd5b60005b85811015610ba05781610b868882610cac565b845260208401935060208301925050600181019050610b73565b5050509392505050565b6000610bbd610bb884611139565b6110c8565b90508082856020860282011115610bd357600080fd5b60005b85811015610c035781610be98882610cac565b845260208401935060208301925050600181019050610bd6565b5050509392505050565b600081359050610c1c816113ab565b92915050565b600082601f830112610c3357600080fd5b6002610c40848285610ae4565b91505092915050565b600082601f830112610c5a57600080fd5b6002610c67848285610b47565b91505092915050565b600082601f830112610c8157600080fd5b6009610c8e848285610baa565b91505092915050565b600081519050610ca6816113c2565b92915050565b600081359050610cbb816113d9565b92915050565b600060208284031215610cd357600080fd5b6000610ce184828501610c0d565b91505092915050565b6000806000806102208587031215610d0157600080fd5b6000610d0f87828801610c49565b9450506040610d2087828801610c22565b93505060c0610d3187828801610c49565b925050610100610d4387828801610c70565b91505092959194509250565b600060208284031215610d6157600080fd5b6000610d6f84828501610c97565b91505092915050565b6000610d848383610e0e565b60408301905092915050565b6000610d9c8383610f9f565b60208301905092915050565b610db181611202565b82525050565b610dc08161117d565b610dca81846111c5565b9250610dd58261115f565b8060005b83811015610e06578151610ded8782610d78565b9650610df88361119e565b925050600181019050610dd9565b505050505050565b610e1781611188565b610e2181846111d0565b9250610e2c82611169565b8060005b83811015610e5d578151610e448782610d90565b9650610e4f836111ab565b925050600181019050610e30565b505050505050565b610e6e81611188565b610e7881846111db565b9250610e8382611169565b8060005b83811015610eb4578151610e9b8782610d90565b9650610ea6836111ab565b925050600181019050610e87565b505050505050565b610ec581611193565b610ecf81846111e6565b9250610eda82611173565b8060005b83811015610f0b578151610ef28782610d90565b9650610efd836111b8565b925050600181019050610ede565b505050505050565b6000610f206026836111f1565b9150610f2b826112bb565b604082019050919050565b6000610f43602e836111f1565b9150610f4e8261130a565b604082019050919050565b6000610f666020836111f1565b9150610f7182611359565b602082019050919050565b6000610f896014836111f1565b9150610f9482611382565b602082019050919050565b610fa881611240565b82525050565b610fb781611240565b82525050565b6000602082019050610fd26000830184610da8565b92915050565b6000604082019050610fed6000830185610da8565b610ffa6020830184610fae565b9392505050565b6000610220820190506110176000830187610e65565b6110246040830186610db7565b61103160c0830185610e65565b61103f610100830184610ebc565b95945050505050565b6000602082019050818103600083015261106181610f13565b9050919050565b6000602082019050818103600083015261108181610f36565b9050919050565b600060208201905081810360008301526110a181610f59565b9050919050565b600060208201905081810360008301526110c181610f7c565b9050919050565b60006110d26110e3565b90506110de828261124a565b919050565b6000604051905090565b600067ffffffffffffffff8211156111085761110761127b565b5b602082029050919050565b600067ffffffffffffffff82111561112e5761112d61127b565b5b602082029050919050565b600067ffffffffffffffff8211156111545761115361127b565b5b602082029050919050565b6000819050919050565b6000819050919050565b6000819050919050565b600060029050919050565b600060029050919050565b600060099050919050565b6000602082019050919050565b6000602082019050919050565b6000602082019050919050565b600081905092915050565b600081905092915050565b600081905092915050565b600081905092915050565b600082825260208201905092915050565b600061120d82611220565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b611253826112aa565b810181811067ffffffffffffffff821117156112725761127161127b565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f496e76616c69642072657665616c2070726f6f66000000000000000000000000600082015250565b6113b481611202565b81146113bf57600080fd5b50565b6113cb81611214565b81146113d657600080fd5b50565b6113e281611240565b81146113ed57600080fd5b5056fea2646970667358221220b402e124432ccf6e2f54c9ba1fa38070b3bdd26cfba7effb760eec0fcf54a26064736f6c63430008040033";

export class RevealMarket__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RevealMarket> {
    return super.deploy(overrides || {}) as Promise<RevealMarket>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RevealMarket {
    return super.attach(address) as RevealMarket;
  }
  connect(signer: Signer): RevealMarket__factory {
    return super.connect(signer) as RevealMarket__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RevealMarketInterface {
    return new utils.Interface(_abi) as RevealMarketInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RevealMarket {
    return new Contract(address, _abi, signerOrProvider) as RevealMarket;
  }
}