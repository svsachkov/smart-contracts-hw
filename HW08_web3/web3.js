const Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider("https://goerli.infura.io/v3/3ccdc975f8d546c9b88b5707e7b9d7da "));
const address = "0xC8B76357302e28f47d79C06C7b67b818fD57dAE7";
const ABI = [
    {
        "inputs": [],
        "name": "retrieve",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "num",
                "type": "uint256"
            }
        ],
        "name": "store",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
web3.eth.getBalance // проверяем
const myContract = new web3.eth.Contract(ABI, address)
myContract.methods.retrieve().call().then(console.log)