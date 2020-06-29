import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  try {
    const user = await User.create({
      name: 'Matheus Martins de Oliveira',
      email: 'matheus@gmail.com',
      password_hash: '1728373837',
    });

    return res.json(user);
  } catch (err) {
    console.error('Erro de conexão com o banco de dados', err);
  }
});

export default routes;
