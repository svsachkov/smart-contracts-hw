// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor(uint256 initialSupply) ERC20("Token", "CLT") {
        _mint(msg.sender, initialSupply);
    }
}