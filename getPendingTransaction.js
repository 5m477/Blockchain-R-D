require ("dotenv").config();
const {ethers} = require("ethers")

const provider = new ethers.providers.WebSocketProvider(process.env.INFURA_WSS)

const getPending = async () => {
    provider.on("pending", async (txhash) => {
        const transaction = await provider.getTransaction(txhash)

        if (transaction != null) {
            gasprice = transaction.gasPrice
            convertedPrice = ethers.utils.formatEther(gasprice)
            console.log(`Confirmation: ${transaction.confirmations} \n Hash: ${transaction.hash} \n ${convertedPrice} \n ${gasprice}`)
        }
    })
}

getPending()
