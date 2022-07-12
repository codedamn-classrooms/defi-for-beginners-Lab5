const { expectRevert } = require('@openzeppelin/test-helpers');
const Token = artifacts.require("TokenSwap.sol");

contract("TokenSwap", (accounts) => { let token; 
    const amount1 = web3.utils.toBN(web3.utils.toWei("1"));
    const amount2= web3.utils.toBN(web3.utils.toWei("2"));
    const contract_addr= await token.deployed();
beforeEach(async () => { 
    token = await Token.new(accounts[0],accounts[1],amount1,accounts[2],accounts[3], amount2); 
});

it("should not allow swapping if called by non-owner", async () => {
    await expectRevert(token.swap(accounts[0] || accounts[2]),"Not authorized");
});

it("should swap token1 when approved", async () => { let allowance; let receipt; const value = web3.utils.toBN(100);

    allowance = await token.allowance(accounts[1], contract_addr.address);
    assert(allowance.isZero());
    
    receipt = await token.approve(contract_addr.address, value); //accounts[0] has approved accounts[1] for 100 tokens
    allowance = await token.allowance(accounts[1], contract_addr.address); //allowance =100
    assert(allowance.eq(value));
});   

it("should not swap token1 if not approved", async () => { 
    await expectRevert( token.swap(amount1), "Token1 allowance too low" ); 
});


it("should swap token2 when approved", async () => { let allowance; let receipt; const value = web3.utils.toBN(100);

    allowance = await token.allowance(accounts[3], contract_addr.address);
    assert(allowance.isZero());
    
    receipt = await token.approve(contract_addr.address, value); //accounts[0] has approved accounts[1] for 100 tokens
    allowance = await token.allowance(accounts[3], contract_addr.address); //allowance =100
    assert(allowance.eq(value));
});   

it("should not swap token2 if not approved", async () => { 
    await expectRevert( token.swap(amount2), "Token2 allowance too low" ); 
});



it("should tranfer swapped tokens", async () => {
    await token._safeTransferFrom(accounts[0],accounts[1],accounts[3],amount1);
    const done=await token.transferFrom(accounts[1],accounts[2],amount1);
    assert.isTrue(done);
});


});

