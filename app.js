const http = require('http');
const moment = require('moment');
const fs = require('fs')

const server = http.createServer((req, res) => {

    try {
        const data = fs.readFileSync(__dirname + '/docxs.txt', 'utf8')
        console.log(data)
    }catch (err) {
        console.error(err)
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' }); 
    res.end('Olá, Mundo'); 

});

server.listen(3000, () => {
    console.log('Servidor rodando em: http://localhost:3000');
    console.log(`Data Atual: ${moment().format("DD/MMM/YYYY HH:mm")}`);
});