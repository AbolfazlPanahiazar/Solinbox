import assert from "assert";
// import ganache from "ganache";
// import Web3 from "web3";
import { describe, it } from "mocha";

// const web3 = new Web3(ganache.provider());

class Car {
  park() {
    return "stopped";
  }

  drive() {
    return "vroom";
  }
}

describe("Car", () => {
  it("can park", () => {
    const car = new Car();
    assert.equal(car.park(), "stopped");
  });
});
