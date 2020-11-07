require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift rifle still horn harvest industry food gas'; 
let testAccounts = [
"0xa1b191a1b08135e06b98c66a72fd615e4cd7db68d5a674a38193b78e81a41b35",
"0x56d535e45904e4f3f209ba9509e557088061447662aafe0e0b48c312a86e3da3",
"0xa12738b36aae7f9f96f116dd0c77ba2716aca783c980a71b5157972b5f90528e",
"0x923ca1c83c69098771025ff5e03261595d8970c8bf9350f9d1e99eb8b66a8d9d",
"0x002898609a9c48593193af5806ec8f6a277c16b4f19f0a6a81a3ad55a7ea8e84",
"0xb94bc814f7cff4e729fe12711ee8393ad1498a411eaae198d9a9a109a9e4da45",
"0x5cdc1ad8d155769ccf23b8b8f95754155851f13c176abf82a09048f67932bdbe",
"0x20bef14f9b8686e1b06f31b6b9fa9a4ddf3a4b1cf42b7e10308bd3ce7209eeb7",
"0xef7bb3300f07c3f9672f4f725a880c64ee38c38e76e8bc52effa0d85a52f5241",
"0x85fbd844d56d35f5c1910edad404f8d57e04dca0c59cb2ecaa14fc82a447ad22"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
