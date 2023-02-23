const router = require('express').Router();
const DespesasController = require('../controllers/despesas-controller');

router.post('/', DespesasController.postDespesa);
router.get('/', DespesasController.getDespesa);
router.get('/:id', DespesasController.getOneDespesa);
router.patch('/:id', DespesasController.patchDespesa);
router.delete('/:id', DespesasController.deleteDespesa);

module.exports= router