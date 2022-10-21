// 1. Access environmental Variables
require('dotenv').config() 

// 2: Connect to network with web3
//https://web3js.readthedocs.io/en/v1.8.0/web3-eth.html#setprovider
const Web3 = require('web3')
const web3 = new Web3(
    new Web3.providers.WebsocketProvider(process.env.INFURA_WSS))

//get pending transactions 
web3.eth.subscribe('pendingTransactions')
.on('data', async transaction => {
    //stream and parse our transactions
    web3.eth.getTransaction(transaction, function(error, result) {
        if(error) {
            console.log(error)
        } else {
            try{
                console.log(`From: ${result.from}`)
                console.log(`To: ${result.to}`)
                console.log(`Value: ${result.value}`)
            } catch(e){}
        }
    })
})


