// SPDX-License-Identifier: MIT

// コンパイラのバージョン指定
// これでこのバージョンに固定するという意味
pragma solidity ^0.8.18;

import "hardhat/console.sol";

contract WavePortal {
    // 状態変数。WavePortalコントラクトのストレージに永続的に保存される。
    uint256 totalWaves;

    constructor() {
        console.log("Here is my first smart contract!");
    }

    function wave() public {
        // 状態変数にwriteしているので、関数修飾子なし
        totalWaves += 1;
        // msg.sender: 関数を呼び出したEOAのアドレス
        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        // 状態変数をreadのみしているので、関数修飾子view
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}
