import assert from "assert";
import ganache from "ganache";
import Web3 from "web3";
import { beforeEach, describe, it } from "mocha";

// @ts-ignore
import { abi, evm } from "../compile";
import { Contract } from "web3-eth-contract";

// @ts-ignore
const web3 = new Web3("ws://localhost:8545");

let accounts: string[];
let inbox: Contract;
const INITIAL_STRING = "Hi there!";
beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  inbox = await new web3.eth.Contract(abi)
    .deploy({
      data: evm.bytecode.object,
      arguments: [INITIAL_STRING],
    })
    .send({ from: accounts[0], gas: 1000000 });
});

describe("Inbox", () => {
  it("deployes a contract", () => {
    assert.ok(inbox.options.address);
  });

  it("has a default message", async () => {
    const message = await inbox.methods.messageText().call();
    assert.equal(message, INITIAL_STRING);
  });

  it("it can change the message", async () => {
    const transaction = await inbox.methods
      .setMessageText("Bye there!")
      .send({ from: accounts[0] });
    const message = await inbox.methods.messageText().call();
    assert.equal(message, "Bye there!");
  });
});
