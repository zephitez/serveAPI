module.exports = function(app) {
  var membersController = require('../controllers/members.server.controller');

  app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

  app.get('/members', membersController.index);
};
