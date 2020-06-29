import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json('Hello Matheus'));

export default routes;
