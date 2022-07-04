import express, { Request, Response } from 'express';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import mainRoutes from './routes/index';
import '../public/css/style.css';

dotenv.config(); // passando as config do dotenv para toda a aplicação como estou no server como se fosse a pagina app do react :))

const server = express(); 

server.set('view engine', 'mustache'); // definindo o template engine para minhas views 
server.set('views', path.join(__dirname, 'views')); // definindo o caminho padrao das minhas views (ele vai ler tudo dentro apartir desse caminho)
server.engine('mustache', mustache()); 

server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({extended: true})); // middleware

server.use(mainRoutes); // definindo um arquivo principal de rotas 

server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!');
}); // rota de erro 404

server.listen(process.env.PORT); // pegando info do meu server do .env