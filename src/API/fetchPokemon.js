
const electron = require('electron'); 
// Importing the net Module from electron remote 
const net = electron.remote.net; 
module.exports = {
// params should be: {id or name}/
fetchAllPokemon: fetchAllPokemon = async (limit = '151', offset = '0') => {
    return new Promise((resolve, reject) => { 
        const request = net.request({
            method: 'GET',
            url: `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
        }).on('response', (res) => { 
            // define a string or array to append or push chunks into
            let chunks = '';
            // define the callback upon the end of the chunk stream
            res.on('end', () => {
                // once end of stream, resolve our promise and return the chunks
                resolve(chunks);
            }); 
            // define the action on each chunk of data
            res.on('data', (chunk) => { 
                // push out data chunk into our string/array
                chunks += chunk;
            });
        }); 
        request.setHeader('Content-Type', 'application/json'); 
        request.end(); 
    });
},

fetchPokemon: fetchPokemon = async (url) => {
    return new Promise((resolve, reject) => { 
        const request = net.request({
            method: 'GET',
            url: `${url}`
        }).on('response', (res) => { 
            let chunks = '';
            res.on('end', () => {
                // console.log("End");
                resolve(chunks);
            }); 
            res.on('data', (chunk) => { 
                // console.log(chunk)
                chunks += chunk;
            }); 
        }); 
        request.setHeader('Content-Type', 'application/json'); 
        request.end(); 
    });
}


    // fetchAllPokemon = fetchAllPokemon,
    // fetchPokemon = fetchPokemon
}