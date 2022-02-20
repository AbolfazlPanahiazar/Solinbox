import * as path from "path";
import * as fs from "fs";
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "utf-8");

const input = {
  language: "Solidity",
  sources: {
    "Inbox.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

export const abi = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  "Inbox.sol"
]["Inbox"].abi;

export const evm = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  "Inbox.sol"
]["Inbox"].evm;

export default JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  "Inbox.sol"
]["Inbox"];
