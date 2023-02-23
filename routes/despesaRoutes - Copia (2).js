const router = require('express').Router();
const CustoController = require('../controllers/custo-controller');

router.post('/', CustoController.postCusto);
router.get('/', CustoController.getCusto);
router.get('/:id', CustoController.getOneCusto);
router.patch('/:id', CustoController.patchCusto);
router.delete('/:id', CustoController.deleteCusto);

module.exports= router