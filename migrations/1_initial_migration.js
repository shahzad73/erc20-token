//var Migrations = artifacts.require("./Migrations.sol");
//var BigNumber = require("BigNumber");
var erc20 = artifacts.require("erc20");

module.exports = function(deployer) {
	  //deployer.deploy(Migrations);
	 var _tokenToMintAddress = "0xeA1466402fC4b0a0b4959E4cd040e79a7309B3c9";
	 //let _initialSupply = new BigNumber(100000000000000000000000);
	 let _initialSupply = 1000000000000000;
	 var _name = "MyTestToken1"
	
	  deployer.deploy(erc20, _tokenToMintAddress, _initialSupply, _name);	
};

