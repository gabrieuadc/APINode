const router = require('express').Router();
const LoginController = require('../controllers/login-controller');

router.post('/cadastro', LoginController.postUser);
router.post('/user', LoginController.postLogin);
// router.get('/', LoginController.getPrivate);


module.exports= router