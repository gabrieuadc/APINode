const router = require('express').Router();
const ServiceController = require('../controllers/Servicess-controller');

router.post('/', ServiceController.postService);
router.get('/', ServiceController.getService);
router.get('/:id', ServiceController.getOneService);
router.patch('/:id', ServiceController.patchService);
router.delete('/:id', ServiceController.deleteService);

module.exports= router