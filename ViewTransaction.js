//get Transaction data 
//https://web3js.readthedocs.io/en/v1.8.0/web3-eth.html?highlight=getTransaction
// 1. Access environmental Variables
require('dotenv').config() 

// 2: Connect to network with web3
//https://web3js.readthedocs.io/en/v1.8.0/web3-eth.html#setprovider
const Web3 = require('web3')
const web3 = new Web3(
    new Web3.providers.WebsocketProvider(process.env.INFURA_WSS))

//transaction Hash
txHash ="0xe5a2bb5ea14b395895bdfcab72f5a680cb4e4c53593e0fa147f6c8af729c5280" //sample data 

//get transaction
web3.eth.getTransaction(txHash, function(error, result) {
    if(error) {
        console.log(error)
    } else {
        console.log(`From: ${result.from}`)
        console.log(`To: ${result.to}`)
        console.log(`To: ${result.value}`)

    }
})
