const router = require('express').Router();
const EmpregadosController = require('../controllers/empregados-controller');

router.post('/', EmpregadosController.postEmpregados);
router.get('/', EmpregadosController.getEmpregados);
router.get('/:id', EmpregadosController.getOneEmpregados);
router.patch('/:id', EmpregadosController.patchEmpregados);
router.delete('/:id', EmpregadosController.deleteEmpregados);

module.exports= router