const { expectRevert } = require('@openzeppelin/test-helpers');
const TokenSwap = artifacts.require("TokenSwap.sol");
const ERC20Token = artifacts.require("MyToken.sol");
//const erc20 = artifacts.require("IERC20.sol");

contract("TokenSwap", (accounts) => { let token; 
    const amount1 = web3.utils.toBN(web3.utils.toWei("1"));
    const amount2= web3.utils.toBN(web3.utils.toWei("2"));
     
beforeEach(async () => { 
    // let contract_addr= await Token.deployed();
    tokenSwap = await TokenSwap.deployed(); 
    erc20Token = await ERC20Token.deployed();
});

it("should not allow swapping if called by non-owner", async () => {
    await expectRevert(tokenSwap.swap(),"Not authorized");
});

it("should swap token1 when approved", async () => { let allowance; let receipt; const value = web3.utils.toBN(100);

    allowance = await erc20Token.allowance(accounts[1], tokenSwap.address);
    assert(allowance.isZero(),"Not Zero");
    
    receipt = await erc20Token.approve(tokenSwap.address, value); //accounts[0] has approved accounts[1] for 100 tokens
    allowance = await erc20Token.allowance(accounts[1], tokenSwap.address); //allowance =100
    console.log(Number(allowance))
    assert((allowance).eq(value), "Not equal to value");
});   

it("should not swap token1 if not approved", async () => { 
    await expectRevert( tokenSwap.swap(), "Token1 allowance too low" ); 
});


it("should swap token2 when approved", async () => { let allowance; let receipt; const value = web3.utils.toBN(100);

    allowance = await erc20Token.allowance(accounts[3], tokenSwap.address);
    assert(allowance.isZero());
    
    receipt = await erc20Token.approve(tokenSwap.address, value); //accounts[0] has approved accounts[1] for 100 tokens
    allowance = await erc20Token.allowance(accounts[3], tokenSwap.address); //allowance =100
    assert(allowance.eq(value));
});   

it("should not swap token2 if not approved", async () => { 
    await expectRevert( tokenSwap.swap(), "Token2 allowance too low" ); 
});



it("should tranfer swapped tokens", async () => {
    await tokenSwap._safeTransferFrom(accounts[0],accounts[1],accounts[3],amount1);
    const done=await erc20Token.transferFrom(accounts[1],accounts[2],amount1);
    assert.isTrue(done);
});


});

