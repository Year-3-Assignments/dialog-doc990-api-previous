const studentController = require('./controllers/userController');

module.exports = function (app) {
  app.post('/api/user/create', studentController.createUser);
  app.get('/api/user/', studentController.getAllUsers);
  app.put('/api/user/update/:id', studentController.updateUser);
  app.delete('/api/user/delete/:id', studentController.deleteUser);
}
