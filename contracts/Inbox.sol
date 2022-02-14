// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Inbox {
    string public messageText;

    constructor(string memory initialMessageText) {
        messageText = initialMessageText;
    }

    function setMessageText(string memory newMessage) public {
        messageText = newMessage;
    }
}
