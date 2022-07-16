const { expectRevert } = require('@openzeppelin/test-helpers');
const TokenSwap = artifacts.require("TokenSwap.sol");
const ERC20Token = artifacts.require("MyToken.sol");
//const erc20 = artifacts.require("IERC20.sol");

contract("TokenSwap", (accounts) => { let token; 
    const amount1 = 1000;
    const amount2= 2000;
     
it("should deploy contract",async () => { 
    // let contract_addr= await Token.deployed();
    
    erc20Token1 = await ERC20Token.deployed();
    erc20Token2 = await ERC20Token.deployed();
    tokenSwap = await TokenSwap.new(erc20Token1.address,accounts[0],100,erc20Token2.address,accounts[1],100); 
    assert(tokenSwap!==undefined, "Not deployed contract")
    
});


it("should not allow swapping if called by non-owner", async () => {
    await expectRevert(tokenSwap.swap({from:accounts[2]}),"Not authorized");
});

it("should swap token1 when approved", async () => { let allowance; let receipt; const value = web3.utils.toBN(100);
    await erc20Token1.mint(accounts[0], value)
    allowance = await erc20Token1.allowance(accounts[0], tokenSwap.address);
    assert(allowance.isZero(),"Not Zero");
    
    receipt = await erc20Token1.approve(tokenSwap.address, value, {from:accounts[0]}); //accounts[0] has approved accounts[1] for 100 tokens
    allowance = await erc20Token1.allowance(accounts[0], tokenSwap.address); //allowance =100
    console.log(Number(allowance))
    assert(allowance.eq(value), "Not equal to value");
});   

// it("should not swap token1 if not approved", async () => { 
//     //const value = web3.utils.toBN(90);
//     //await expectRevert(erc20Token1.approve(tokenSwap.address,value), "Token1 allowance too low" ); 
//     const a= await erc20Token1.allowance(accounts[0],tokenSwap.address);
//     console.log(Number(a));
//     assert.isAtLeast(Number(a),0, " allowance is too low");
// });

it("should not swap token1 if not approved", async () => { 
    await expectRevert( tokenSwap.swap({from:accounts[1]}), "Token 2 allowance too low" );
   
});


it("should swap token2 when approved", async () => { let allowance; let receipt; const value = web3.utils.toBN(100);
    await erc20Token2.mint(accounts[1], value)
    allowance = await erc20Token2.allowance(accounts[1], tokenSwap.address);
    assert(allowance.isZero());
    
    receipt = await erc20Token2.approve(tokenSwap.address, value, {from:accounts[1]}); //accounts[0] has approved accounts[1] for 100 tokens
    allowance = await erc20Token2.allowance(accounts[1], tokenSwap.address); //allowance =100
    assert(allowance.eq(value));
});   

it("should  swap token2 if approved", async () => { 
    await  tokenSwap.swap({from:accounts[1]}) ;
});



// it("should tranfer swapped tokens", async () => {
//     await tokenSwap._safeTransferFrom(accounts[2],accounts[0],accounts[1],amount1);
//     const done=await erc20Token.transferFrom(accounts[0],accounts[1],amount1);
//     assert.isTrue(done, "Token transfer failed");

//     const a= await erc20Token1.allowance(accounts[0],tokenSwap.address);
//     assert.isAtLeast(a,amount1,"allowance too low");

//     const balance= await tokenSwap.getBalance(accounts[0]);
//     assert.isAtLeast(balance,amount1,"balance not sufficient");
// });


});

