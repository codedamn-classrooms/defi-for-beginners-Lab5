const TokenSwap = artifacts.require("TokenSwap.sol");

module.exports = function (deployer,network,accounts) {
  deployer.deploy(TokenSwap,accounts[0],accounts[1],1000,accounts[2],accounts[3],2000);
};

