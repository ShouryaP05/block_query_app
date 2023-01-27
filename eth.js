const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

async function getBlockData(blockNumber, transactionNumber) {

    const block = await web3.eth.getBlock(blockNumber);
    if (!block) {
        console.error(`Block ${blockNumber} not found`);
        return;
    }

    const transaction = await web3.eth.getTransactionFromBlock(blockNumber, transactionNumber);
    if (!transaction) {
        console.error(`Transaction ${transactionNumber} not found in block ${blockNumber}`);
        return;
    }


    console.log(`Block number: ${blockNumber}`);
    console.log(`Block hash: ${block.hash}`);
    console.log(`Block timestamp: ${block.timestamp}`);
    console.log(`Transaction hash: ${transaction.hash}`);
    console.log(`Transaction from: ${transaction.from}`);
    console.log(`Transaction to: ${transaction.to}`);
    console.log(`Transaction value: ${transaction.value}`);
}

getBlockData(123456, 0);
