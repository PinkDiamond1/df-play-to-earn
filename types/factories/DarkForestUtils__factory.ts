/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  DarkForestUtils,
  DarkForestUtilsInterface,
} from "../DarkForestUtils";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[5]",
        name: "perlinFlags",
        type: "uint256[5]",
      },
      {
        internalType: "bool",
        name: "checkingBiome",
        type: "bool",
      },
    ],
    name: "revertIfBadSnarkPerlinFlags",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class DarkForestUtils__factory {
  static readonly abi = _abi;
  static createInterface(): DarkForestUtilsInterface {
    return new utils.Interface(_abi) as DarkForestUtilsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DarkForestUtils {
    return new Contract(address, _abi, signerOrProvider) as DarkForestUtils;
  }
}
