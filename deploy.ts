import HDWalletProvider from "@truffle/hdwallet-provider";
import Web3 from "web3";
import { abi, evm } from "./compile";

const provider = new HDWalletProvider(
  "strong defense guilt code moral mechanic swarm bridge ghost purity fix urge",
  "https://rinkeby.infura.io/v3/99a4783b46ad4cb3ab5fe1f79a448ca3"
);

const web3 = new Web3(provider);


