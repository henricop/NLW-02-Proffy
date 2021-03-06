import express from 'express';
import ClassesController from './controller/ClassesController';
import ConnectionController from './controller/ConnectionsControler';

const routes = express.Router();
const classesControllers = new  ClassesController();
const connectionsController = new ConnectionController();

routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);
routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;