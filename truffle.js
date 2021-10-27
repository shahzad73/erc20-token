/*var HDWalletProvider = require("truffle-hdwallet-provider");

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
};*/



let PrivateKeyProvider = require("truffle-privatekey-provider");
module.exports = {

    networks: {
		development: {
			  host: "127.0.0.1",
			  port: 7545,
			  network_id: "*" // Match any network id
		 },		
        kovan: {
            provider: new PrivateKeyProvider("8d92365d9a2479d9845327cdd71b2d63d74dd615032d738af30c8e057a178f1f", "https://kovan.infura.io/v3/fe41724da6f24b76a782f376b2698ee8"),
            network_id: 42,
            from: "0xE3C20D3089a7eF284b8Ab04bBEA0aaB8d50805b9",
            gas: 8000000
        },
    },
    // Set default mocha options here, use special reporters etc.
    mocha: {
        timeout: 100000
    },
    // Configure your compilers
    compilers: {
        solc: {
            version: "0.8.0"
        }
    },
};

