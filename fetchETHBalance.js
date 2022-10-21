const { ethers } = require('ethers');

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/<"APIKEY">`);
const address = ''
const main = async () => {
  const balance = await provider.getBalance(address);
  
console.log(balance);
console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)

}
main()
