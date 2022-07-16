// SPDX-License-Identifier: MIT

pragma solidity 0.8.15;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

library PriceConvertor {
    function getVersion() internal view returns (uint256) {
        return
            AggregatorV3Interface(0x8A753747A1Fa494EC906cE90E9f37563A8AF630e)
                .version();
    }

    // ETH / USD price feed contract address on Rinkeby
    //	0x8A753747A1Fa494EC906cE90E9f37563A8AF630e

    function getPrice() internal view returns (uint256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(
            0x8A753747A1Fa494EC906cE90E9f37563A8AF630e
        );
        (, int256 price, , , ) = priceFeed.latestRoundData();
        // ETH in terms of USD
        // 3000.00000000
        return uint256(price * 1e10);
    }

    function getConvserionRate(uint256 ethAmount)
        internal
        view
        returns (uint256)
    {
        uint256 ethPrice = getPrice();
        uint256 ethAmountIndUsd = (ethPrice * ethAmount) / 1e18;
        return ethAmountIndUsd;
    }
}
