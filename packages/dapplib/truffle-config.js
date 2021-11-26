require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remember erosion give kite bone silver'; 
let testAccounts = [
"0x66841f0173ce23cd375603a62a0cb92a2b578436d4d723892e46a37018a1b0a9",
"0x49cf02a9e6e7e9287fb97677eafa3a2628dd57d024f4f288de7549dd121d5cd6",
"0x3b71b90d08076127afc014a1e4ead88eb73763650f09d2b7ab01af9c4de1749f",
"0xb4ac9bda8cdf6de8538cb0bb903ae13fe6336c8bae475d4b496bfcd427243bab",
"0x0b4519a5308fbcc46c0ecb5df7366548c8020cd20726fc7d567ff1abf92839cd",
"0x195b3d3350a581e98d566cd9dbdcecdaa3ae31555b3d2d921996ae4aee6667cf",
"0x26040bfc461a5f0e620748bccc3527965f7432e977816d99bfd311f3d04999d5",
"0xaa476ab06fe33df71ed476301750cdd6917c937b1a2f327d30d2e664d9441164",
"0x1f83b103d325aac1908c86b8b7673fadcdd8ab526b1809bb288b91d0da781dad",
"0xec86c7c53f0e98142bffc7da4c6bea69c1199a14a76b5ec1abf2c6fdbf211a7f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

