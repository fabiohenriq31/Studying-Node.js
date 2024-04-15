import http from 'http';
import { json } from './middlewares/json.js';
import { routes } from './routes.js';

// Query Parameters: Parametros nomeados enviados na rota após "?" (Filtros, paginação) exemplo: http://localhost:3333/users?page=2&nome=Diego utilizados para filtros, paginação, mas não sao obrigatorios
// Route Parameters: Parametros utilizados para identificar recursos. exemplo: http://localhost:3333/users/1
// Request Body: Envio de informações de um formulário. exemplo: 


const server = http.createServer( async (req, res) => {
    const {method, url} = req

    await json(req,res)
    
    const route = routes.find(route => {
        return route.method == method && route.path.test(url)
    })

    if (route) {
        const routeParams = req.url.match(route.path)

        req.params = { ...routeParams.groups }

        return route.handler(req, res)
    }
    
    return res.writeHead(404).end('')
    
});

server.listen(3333);