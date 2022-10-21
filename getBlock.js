// 1. Access environmental Variables
require('dotenv').config() 
var figlet = require('figlet');

figlet('477 scanning the mempool for new block', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
//const { on } = require('events')
//const { default: Web3, default: Web3 } = require('web3')
// 2: Connect to network with web3
//https://web3js.readthedocs.io/en/v1.8.0/web3-eth.html#setprovider
const Web3 = require('web3')
const web3 = new Web3(
    new Web3.providers.WebsocketProvider(process.env.INFURA_WSS)
)
//3. Grab block numbers
//https://web3js.readthedocs.io/en/v1.8.0/web3-eth-subscribe.html#id8
web3.eth.subscribe('newBlockHeaders')
.on('data', async block => {
    console.log(`Block#: ${block.number}`)
})
//check for errors
.on('error', error => {
    console.log(error)
})
