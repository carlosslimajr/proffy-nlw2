import express from 'express'
import ClassesController from './controllers/ClassesControllers';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router(); //modulo de roteamento do express !
const classesControllers = new ClassesController();
const connectionscontroller = new ConnectionsController();



routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

routes.post('/connections',connectionscontroller.create)
routes.get('/connections',connectionscontroller.index)

export default routes;
