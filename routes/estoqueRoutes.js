const router = require('express').Router();
const EstoqueController = require('../controllers/estoque-controller');

router.post('/', EstoqueController.postEstoque);
router.get('/', EstoqueController.getEstoque);
router.get('/:id', EstoqueController.getOneEstoque);
router.patch('/:id', EstoqueController.patchEstoque);
router.delete('/:id', EstoqueController.deleteEstoque);

module.exports= router