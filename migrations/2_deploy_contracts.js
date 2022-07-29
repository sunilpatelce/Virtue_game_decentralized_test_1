const MarketPlace = artifacts.require("MarketPlace");
const MintNFT = artifacts.require("MintNFT");
module.exports = function (deployer, network, accounts) {
  deployer.then(async () => {
    await deployer.deploy(MarketPlace);
    await deployer.deploy(MintNFT , MarketPlace.address);
  })
}
