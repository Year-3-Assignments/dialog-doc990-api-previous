import {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
} from './controllers/userController';

export default function (app) {
  app.post('/api/user/create', createUser);
  app.get('/api/user/', getAllUsers);
  app.put('/api/user/update/:id', updateUser);
  app.delete('/api/user/delete/:id', deleteUser);
}
