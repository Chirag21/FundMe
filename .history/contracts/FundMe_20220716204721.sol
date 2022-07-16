// SPDX-License-Identifier: MIT

pragma solidity 0.8.15;

import "./PriceConvertor.sol";

contract FundMe {
    using PriceConvertor for uint256;
    uint256 public constant MINIMUM_USD = 50 * 10e18;
    address[] public funders;
    mapping(address => uint256) public addressToAmountFunded;
    address public immutable i_owner;

    error NotOwner();

    constructor() {
        i_owner = msg.sender;
    }

    modifier onlyOwner() {
        if (msg.sender == i_owner) {
            revert NotOwner();
        }
        _;
    }

    function fund() public payable {
        require(
            msg.value.getConvserionRate() >= MINIMUM_USD,
            "Did not send enough!"
        );
        funders.push(msg.sender);
        addressToAmountFunded[msg.sender] += msg.value;
    }

    function withdraw() public onlyOwner {
        for (uint256 funderIndex; funderIndex < funders.length; funderIndex++) {
            address funder = funders[funderIndex];
            addressToAmountFunded[funder] = 0;

            // reset the array
            funders = new address[](0);

            // actually withdraw the funds
            (bool callSuccess, ) = payable(msg.sender).call{
                value: address(this).balance
            }("");
            require(callSuccess, "Call failed");
        }
    }

    receive() external payable {
        fund();
    }

    fallback() external payable {
        fund();
    }
}
