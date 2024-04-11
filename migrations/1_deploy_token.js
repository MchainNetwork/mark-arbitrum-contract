const MarkToken = artifacts.require('MarkToken');

module.exports = function (deployer) {
  const tokenName = 'Mchain Network';
  const tokenSymbol = 'MARK';

  deployer.deploy(MarkToken, tokenName, tokenSymbol);
};
