const MyToken = artifacts.require("MyToken.sol");
const TokenSwap = artifacts.require("TokenSwap.sol");

module.exports = async function (deployer,network,accounts) {
   deployer.deploy(MyToken,"sk","sk");
  // var MyToken1 = await MyToken.deployed();
  // await deployer.deploy(MyToken,"skk","skk");
  // var MyToken2 = await MyToken.deployed();
  deployer.deploy(TokenSwap,accounts[2],accounts[0],1000,accounts[3],accounts[1],2000);
};
