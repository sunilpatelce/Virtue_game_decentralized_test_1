const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')

const address = '0xF436fbfB8Fb33618Ae650D6Dc9bbC71813A669A6'
const privateKey = '20d6b55d94f470a90626fa2de4490a52309c38dbc1220b037bf30ab8b688b032'

const MarketPlace = '0xF2e4a1A04a04240D9eC82f4bf0907670023d9a52';
const MarketPlaceAbi = require('.././build/contracts/MarketPlace.json').abi;

const init = async () => {
    const provider = new HDWalletProvider(privateKey, 'https://rinkeby.infura.io/v3/49b2ce901eeb4d41bc972b31a4a7d1fb')
    const web3 = new Web3(provider)
    const contract = new web3.eth.Contract(MarketPlaceAbi, MarketPlace);
    const explore = await contract.methods.explore().call()
    const addNFTType = await contract.methods.addNFTType("programming").send({from : address})
    console.log(explore);
    console.log(addNFTType);
}
init()



