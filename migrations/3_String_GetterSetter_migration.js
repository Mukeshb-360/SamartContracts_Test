const StrGetterSetter = artifacts.require("StrGetterSetter");

module.exports = function (deployer) {
  deployer.deploy(StrGetterSetter);
};
