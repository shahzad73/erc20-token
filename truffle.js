var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "risk produce engine hole pole clinic curious flock high ketchup liberty inflict";


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
	 },
	  ropsten: {
		  provider: function() {
			return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/fe41724da6f24b76a782f376b2698ee8")
		  },
		  network_id: 3,       // Ropsten's id
		  gas: 5500000,        // Ropsten has a lower block limit than mainnet
		  confirmations: 2,    // # of confs to wait between deployments. (default: 0)
		  timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
		  skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
	  }
  },	
  compilers: {
     solc: {
       version: "0.8.0"
     }
  }	
};


