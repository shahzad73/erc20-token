pragma solidity ^0.8.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract erc20 is ERC20 {

	constructor(address _tokenToMintAddress, uint256 _initialSupply, string memory _name ) ERC20(_name, _name) {
	
			_mint(_tokenToMintAddress , _initialSupply);
							 
	}

}
