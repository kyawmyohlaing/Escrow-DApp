module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*"
    },
      ropsten: {
        host: "127.0.0.1",
        port: 8545,
        network_id: 3,
        gas: 2900000
      },
      tmdnode: {
        host: "165.22.32.19",
        port: 8000,
        network_id: 38240,
        gas: 2900000
      }
  },
  rpc: {
    host: '165.22.32.19',
    post: 8000,
    network_id: 38240,

  }
};
