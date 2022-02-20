import assert from "assert";
import ganache from "ganache";
import Web3 from "web3";
import { beforeEach, describe, it } from "mocha";

// @ts-ignore
import { abi, evm } from "../compile";
import { Contract } from "web3-eth-contract";

console.log("abi", abi);

// @ts-ignore
const web3 = new Web3("ws://localhost:8545");

let accounts: string[];
let inbox: Contract;
beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  inbox = await new web3.eth.Contract(abi)
    .deploy({
      data: evm.bytecode.object,
      arguments: ["Hi there!"],
    })
    .send({ from: accounts[0], gas: 1000000 });
});

describe("Inbox", () => {
  it("deployes a contract", () => {
    console.log(abi);
  });
});
