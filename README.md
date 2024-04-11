# MARK Token Arbitrum Smart Contract

## Description

This repository contains the smart contract for creating the MARK token, a token complying with the ERC20 standard on the Arbitrum network.

## Repository Structure

```
- contracts/
    - MarkToken.sol  // Main contract of the MARK token
- migrations/
- test/
- truffle-config.js
- README.md  // This file
- .env.example
```

## Setup

Before proceeding with the deployment, you need to set up your environment variables. Create a `.env` file at the root of your project and add the following lines:

```sh
DEPLOYER_ADDRESS=0xYourDeployerAddressHere
ARBISCAN_API_KEY=YourArbiscanApiKeyHere
```

- `DEPLOYER_ADDRESS`: The Ethereum address from which you will deploy the contract. Ensure you have control over this address and have sufficient Ether to cover the gas costs of the deployment.
- `ARBISCAN_API_KEY`: The Arbiscan API key. 

## Deployment Instructions

1. Ensure Truffle is installed globally (`npm install -g truffle`).
2. Clone this repository to your local machine.
3. Navigate to the project folder and run `npm install` to install all necessary dependencies.
4. Add your network and account configurations in `truffle-config.js`.
5. Deploy the contract

## Deploy the contract

To deploy the contract using Truffle, you can use one of the following script commands based on your needs:

### Basic Migration

```bash
truffle migrate
```

### Migration to Truffle Dashboard

```bash
truffle migrate --network dashboard
```

## Truffle Dashboard

To access the Truffle dashboard, use the following script command:

```bash
truffle dashboard
```

## Testing

To run unit tests, use the following command:

```
truffle test
```

## Contribution

If you would like to contribute to this project, please create an Issue or a Pull Request to propose your changes or improvements.

## License

This project is licensed under the MIT license.
