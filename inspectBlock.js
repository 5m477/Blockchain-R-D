require ('dotenv').config();
const {ethers} = require("ethers")
var figlet = require('figlet');

figlet('477 Inspector!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
const provider = new ethers.providers.WebSocketProvider(process.env.INFURA_WSS)

const inspectBlock = async () => {
    // provider.getBlock( block ) ⇒ Promise< Block >https://docs.ethers.io/v5/api/providers/provider/#Provider-getTransactionCount
    const blockNumber = await provider.getBlockNumber()
    console.log(`Block# ${blockNumber}\n`)

    const blockInfo= await provider.getBlock(blockNumber)

    console.log(blockInfo)

    inspectTransaction(blockNumber)
}

const inspectTransaction = async (blockNumber) => {
    const {transactions} = await provider.getBlockWithTransactions(blockNumber)
    console.log(transactions[0].value._hex)
    transactions.forEach(function(transaction){
        console.log(transaction.hash)
        console.log(transaction.to)
    })
}


inspectBlock()
