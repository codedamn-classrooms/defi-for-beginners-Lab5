const MyToken = artifacts.require("MyToken.sol");

module.exports = function (deployer,network,accounts) {
  deployer.deploy(MyToken,"sk","sk");
};
