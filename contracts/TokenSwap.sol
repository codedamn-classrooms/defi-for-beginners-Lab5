// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// interface IERC20 { 

//     function totalSupply() external view returns (uint256);
//     function balanceOf(address tokenOwner) external view returns (uint256 balance);
//     function transfer(address to, uint256 tokens) external returns (bool success);
//     function allowance(address tokenOwner, address spender) external view returns (uint256 remaining);
//     function approve(address spender, uint256 tokens) external returns (bool success);
//     function transferFrom(address from,address to,uint256 tokens) external returns (bool success);

//     event Transfer(address indexed from, address indexed to, uint256 tokens);
//     event Approval(address indexed tokenOwner,address indexed spender,uint256 tokens);
// }

contract TokenSwap is ERC20("token", "token") {

//Few lines of code is given for your help. Write the code of functions.

    IERC20 public token1;
    address public owner1;
    uint public amount1;
    IERC20 public token2;
    address public owner2;
    uint public amount2;

    constructor(
        address _token1,
        address _owner1,
        uint _amount1,
        address _token2,
        address _owner2,
        uint _amount2
    ) {
        token1 = IERC20(_token1);
        owner1 = _owner1;
        amount1 = _amount1;
        token2 = IERC20(_token2);
        owner2 = _owner2;
        amount2 = _amount2;
    }


      //Write your code here

   
}


