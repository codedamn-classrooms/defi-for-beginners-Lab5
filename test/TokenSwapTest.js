const { expectRevert } = require('@openzeppelin/test-helpers');
const TokenSwap = artifacts.require("TokenSwap.sol");
const ERC20Token = artifacts.require("MyToken.sol");
//const erc20 = artifacts.require("IERC20.sol");

contract("TokenSwap", (accounts) => { let token; 
<<<<<<< HEAD
    const amount1 = web3.utils.toBN(1);
    const amount2 = web3.utils.toBN(2);
     
beforeEach(async () => { 
    // let contract_addr= await Token.deployed();
    erc20Token = await ERC20Token.deployed();
    erc20Token1 = await ERC20Token.deployed();
    tokenSwap = await TokenSwap.new(erc20Token.address, accounts[0],amount1, erc20Token1.address, accounts[1], amount2); 
   
=======
    const amount1 = 1000;
    const amount2= 2000;
     
beforeEach(async () => { 
    // let contract_addr= await Token.deployed();
    erc20Token1 = await ERC20Token.deployed();
    erc20Token2 = await ERC20Token.deployed();
    tokenSwap = await TokenSwap.new(erc20Token1.address,accounts[0],1000,erc20Token2.address,accounts[1],2000); 
    
>>>>>>> 72d08331425af16aa61a2b70441de7368ec9700c
});


it("should not allow swapping if called by non-owner", async () => {
    // console.log(accounts[2])
    // console.log(await tokenSwap.token1addr()) 
    await expectRevert(tokenSwap.swap({from:accounts[5]}),"Not authorized");
});

it("should swap token1 when approved", async () => { let allowance; let receipt; const value = web3.utils.toBN(100);
<<<<<<< HEAD
    await erc20Token.mint(accounts[1],value);
    allowance = await erc20Token.allowance(accounts[1], tokenSwap.address);
    assert(allowance.isZero(),"Not Zero");
    
    receipt = await erc20Token.approve(tokenSwap.address, value, {from:accounts[1]}); //accounts[0] has approved accounts[1] for 100 tokens
    allowance = await erc20Token.allowance(accounts[1], tokenSwap.address); //allowance =100
=======
    await erc20Token1.mint(accounts[0], value)
    allowance = await erc20Token1.allowance(accounts[0], tokenSwap.address);
    assert(allowance.isZero(),"Not Zero");
    
    receipt = await erc20Token1.approve(tokenSwap.address, value, {from:accounts[0]}); //accounts[0] has approved accounts[1] for 100 tokens
    allowance = await erc20Token1.allowance(accounts[0], tokenSwap.address); //allowance =100
>>>>>>> 72d08331425af16aa61a2b70441de7368ec9700c
    console.log(Number(allowance))
    assert(allowance.eq(value), "Not equal to value");
});   

// it("should not swap token1 if not approved", async () => { 
//     await expectRevert( tokenSwap.swap(), "Token1 allowance too low" ); 
// });


it("should swap token2 when approved", async () => { let allowance; let receipt; const value = web3.utils.toBN(100);
<<<<<<< HEAD
    
    allowance = await erc20Token.allowance(accounts[3], tokenSwap.address);
=======
    await erc20Token2.mint(accounts[1], value)
    allowance = await erc20Token2.allowance(accounts[1], tokenSwap.address);
>>>>>>> 72d08331425af16aa61a2b70441de7368ec9700c
    assert(allowance.isZero());
    
    receipt = await erc20Token2.approve(tokenSwap.address, value, {from:accounts[1]}); //accounts[0] has approved accounts[1] for 100 tokens
    allowance = await erc20Token2.allowance(accounts[1], tokenSwap.address); //allowance =100
    assert(allowance.eq(value));
});   

it("should not swap token2 if not approved", async () => { 
    await expectRevert( tokenSwap.swap({from:accounts[2]})); 
});



// it("should tranfer swapped tokens", async () => {
//     await tokenSwap._safeTransferFrom(accounts[0],accounts[1],accounts[3],amount1);
//     const done=await erc20Token.transferFrom(accounts[1],accounts[2],amount1);
//     assert.isTrue(done);
// });


});

