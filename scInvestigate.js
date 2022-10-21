const { ethers } = require('ethers');

PROJECT_ID ='f621ca7726894b249e5a9ba9ed82121e'
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${PROJECT_ID}`)

abi =[
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address)  view returns (uint)",
 
];
const address = '0x3aac1cC67c2ec5Db4eA850957b967Ba153aD6279'
const contract = new ethers.Contract(address, abi, provider)

const main = async () => {
  const name = await contract.name()
  const symbol = await contract.symbol()
  const totalSupply = await contract.totalSupply()

   console.log(`\nReading from ${address}\n`)
   console.log(`Name: ${name}`) 
   console.log(`Symbol: ${symbol}`)
   console.log(`Total Supply: ${totalSupply}\n`)

   const balance = await contract.balanceOf('0x3aac1cC67c2ec5Db4eA850957b967Ba153aD6279')
      console.log(`Balance: ${balance}`)
      console.log(`Balance Formatted: ${ethers.utils.formatEther(balance)}\n`)

}

main()
