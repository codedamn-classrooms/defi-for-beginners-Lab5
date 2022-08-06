//SPDX-License-Identifier: MIT
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
    IERC20 public token1;
    address public owner1;
    uint public amount1;
    IERC20 public token2;
    address public owner2;
    uint public amount2;

//Create constructor

<<<<<<< HEAD
    function swap() public {
        require(msg.sender == owner1 || msg.sender == owner2, "Not authorized");
        // require(
        //     token1.allowance(owner1, address(this)) >= amount1,
        //     "Token 1 allowance too low"
        // );
        require(
            token2.allowance(owner2, address(this)) >= amount2,
            "Token 2 allowance too low"
        );
=======
>>>>>>> 2156cb4299471952813b036ba68c4bf3f5551632

//Create swap function

    function _safeTransferFrom(
        IERC20 token,
        address sender,
        address recipient,                                         
        uint amount
    ) private {
        bool sent = token.transferFrom(sender, recipient, amount);
        require(sent, "Token transfer failed");
    }

   
}


