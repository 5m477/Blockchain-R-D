
//https://web3js.readthedocs.io/en/v1.8.0/web3-eth-subscribe.html#subscribe-pendingtransactions
// 1. Access environmental Variables
require('dotenv').config() 

//const { on } = require('events')
//const { default: Web3, default: Web3 } = require('web3')
// 2: Connect to network with web3
//https://web3js.readthedocs.io/en/v1.8.0/web3-eth.html#setprovider
const Web3 = require('web3')
const web3 = new Web3(
    new Web3.providers.WebsocketProvider(process.env.INFURA_WSS)
)

//3. Grab Pending transaction hashes
web3.eth.subscribe('pendingTransactions')
.on('data', async transaction =>  {
    console.log(`Transaction: ${transaction}`)
}) 
.on('error', error =>{
    console.log(error)
})
