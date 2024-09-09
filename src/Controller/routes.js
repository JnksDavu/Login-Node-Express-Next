import { Router } from 'express';

// import all controllers
import SessionController from './controllers'

const routes = new Router();

// Add routes
routes.get('/', SessionController.store);

export {routes};
