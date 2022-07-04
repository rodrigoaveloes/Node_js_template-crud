import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as InfoController from '../controllers/infoController';
import * as UserController from '../controllers/userController';


// * as = exportando tudo

const router = Router();

router.get('/', HomeController.home);

router.get('/contato', InfoController.contato);
router.get('/sobre', InfoController.sobre);
router.get('/nome', UserController.nome);
router.get('/idade', UserController.idadeForm);
router.get('/usuario/:id/mais', UserController.addIdade)
router.get('/usuario/:id/menos', UserController.diminuirIdade)
router.get('/usuario/:id/excluir', UserController.excluir)
router.get('/usuario/:id/editar', UserController.editar)


router.post('/idade-resultado', UserController.idadeAction);
router.post('/novousuario', UserController.CreateNewUser)
router.post('/atualizarNome', UserController.atualizarNome)

// atualizar nome = form action com o nome da ação



export default router;