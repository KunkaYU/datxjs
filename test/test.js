const Eos = require('../src/index.js');


const chainId = "1c6ae7719a2a3b4ecb19584a30ff510ba1b6ded86e1fd8b8fc22f1179c622a32";
const httpEndpoint = "http://127.0.0.1:8888"
const eos = Eos({httpEndpoint, chainId, keyProvider: () => userProvidedKey});

let userProvidedKey = null;

(async function(){
    options = {
        authorization: 'alice@active',
        broadcast: true,
        sign: true
    };
    userProvidedKey = '5K6GKhesiZ5JfxjgS2pW79fJWPPeQnPy6BELghgkxLG2wdByRYq';
    let result = await eos.transfer('alice', 'bob', '1.0000 DATX', '', options)
    console.log(result);
})();


