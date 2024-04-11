// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MarkToken is ERC20 {

    constructor(
        string memory tokenName,
        string memory tokenSymbol
    ) ERC20(tokenName, tokenSymbol) {
        _mint(msg.sender, 110000000 * 10 ** 18);
    }
}
