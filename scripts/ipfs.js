const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })
const fs = require('fs');

var buffer;

fs.readFile('metaData.json', function (err, data) {
    if (err) throw err;
    buffer = Buffer(data)
    ipfs.add(buffer, (error, result) => {
        console.log('ipfs hash is : ', result)
        if (error) {
            console.log(error)
            return
        }
    })
});

// for creating a metadata : 
// step 1 : upload an image to ipfs then :
// step 2 : change the metaData.json image(property)
// step 3 : upload the json to ipfs and mint an nft with the hash 


// https://ipfs.io/ipfs/QmSuD17QKjNKTscKnEcYUTE2GMcLJjrD6RiMLyos78wdR7
// https://ipfs.io/ipfs/QmZUiMcShNv6k5N1DcjktYdfYLxH78ZoMq2BVh9DcAvg45
// https://ipfs.io/ipfs/QmfMRU7wuNK455U39GcSu313sVQ1AtFACZXC1PtwCr6ybH
