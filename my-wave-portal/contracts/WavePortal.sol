// SPDX-License-Identifier: MIT

// コンパイラのバージョン指定
// これでこのバージョンに固定するという意味
pragma solidity ^0.8.18;

import "hardhat/console.sol";

contract WavePortal {
    constructor() {
        console.log("Here is my first smart contract!");
    }
}
