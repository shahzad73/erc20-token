pragma solidity ^0.8.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract erc20 is ERC20 {

	constructor() ERC20("DigiShares99", "DIGI") {
	
			_mint(address(0xc56e006Ae844fB24096C4e8a87ca2a472048e175), 100000000000000000000000);
							 
	}

}
