//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MintNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address internal marketPlaceAddress;

    constructor(address _marketPlaceAddress) ERC721("VOMMIO", "VMM") {
        marketPlaceAddress = _marketPlaceAddress;
    }

    function mintNFT(string memory _tokenURI) public  returns (uint) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender , newItemId);
        _setTokenURI(newItemId , _tokenURI);
        setApprovalForAll(marketPlaceAddress , true);
        return newItemId;
    }
}
