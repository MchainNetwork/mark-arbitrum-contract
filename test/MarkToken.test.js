const { expect } = require('chai');
const { BN, expectRevert, constants } = require('@openzeppelin/test-helpers');
const MarkToken = artifacts.require('MarkToken');

contract('MarkToken', function ([deployer, recipient]) {
  const initialAmount = new BN(110000000);
  const tokenName = 'Mchain Network';
  const tokenSymbol = 'MARK';
  const decimalUnits = new BN(18);
  const zeroAddress = constants.ZERO_ADDRESS;
  const custodianAddress = deployer;

  beforeEach(async function () {
    this.token = await MarkToken.new(tokenName, tokenSymbol, {
      from: deployer,
    });
  });

  describe('Deployment', function () {
    it('should assign the total supply of tokens to the custodian address', async function () {
      const totalSupply = await this.token.totalSupply();
      const custodianBalance = await this.token.balanceOf(custodianAddress);

      expect(totalSupply).to.be.bignumber.equal(
        initialAmount.mul(new BN(10).pow(decimalUnits))
      );
      expect(custodianBalance).to.be.bignumber.equal(totalSupply);
    });

    it('should set the correct name and symbol', async function () {
      const name = await this.token.name();
      const symbol = await this.token.symbol();

      expect(name).to.equal(tokenName);
      expect(symbol).to.equal(tokenSymbol);
    });

    it('should set the correct decimals', async function () {
      const decimals = await this.token.decimals();

      expect(decimals).to.be.bignumber.equal(decimalUnits);
    });
  });

  describe('Transactions', function () {
    it('should allow transfer of tokens', async function () {
      const transferAmount = new BN(100);
      await this.token.transfer(recipient, transferAmount, { from: deployer });

      const recipientBalance = await this.token.balanceOf(recipient);
      expect(recipientBalance).to.be.bignumber.equal(transferAmount);
    });

    it('should not allow transfer from the zero address', async function () {
      await expectRevert(
        this.token.transfer(recipient, 100, { from: zeroAddress }),
        'ERC20: transfer from the zero address'
      );
    });

    it('should not allow transfer to the zero address', async function () {
      await expectRevert(
        this.token.transfer(zeroAddress, 100, { from: deployer }),
        'ERC20: transfer to the zero address'
      );
    });
  });
});
