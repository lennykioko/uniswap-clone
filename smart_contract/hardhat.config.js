require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/_u9-l82gZabw1of9p6KhuPh4trttvIqh',
      accounts: [
        '529ad033f5b3fb2a1a2b9cfaf8fc4961056844c7de4eae5ff9c4f2f20f1c2c79',
      ],
    },
  },
};
