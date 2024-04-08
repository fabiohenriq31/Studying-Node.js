import http from 'http';

const users = [];

const server = http.createServer((req, res) => {
    const {method, url} = req

    if (method == 'GET' && url == '/users'){
        return res
        .setHeader('Content-type', 'application/json') //setHeader é utilizado  para definir um ou mais cabeçalhos.No caso específico desse código, ele está definindo o tipo de conteúdo como application/json, indicando que o corpo da resposta contém dados no formato JSON.
        .end(JSON.stringify(users));
    }

    if (method == 'POST' && url == '/users') {
        users.push({
            id: 1,
            name: "John Doe",
            email: "john@doe.com"
        })

        return res.writeHead(201).end('')
    }
    
    
    return res.writeHead(404).end('')
    
});

server.listen(3333);