var Migrations = artifacts.require("./Migrations.sol");
var erc20 = artifacts.require("erc20");

module.exports = function(deployer) {
	  //deployer.deploy(Migrations);

	  deployer.deploy(erc20);	
};
