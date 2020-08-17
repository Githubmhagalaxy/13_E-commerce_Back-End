const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { tagController } = require('../../controllers')

// The `/api/tags` endpoint

router.get('/', tagController.getAllTags);

router.get('/:id', tagController.getTagById);

router.post('/', tagController.postNewTag);

router.put('/:id', tagController.putUpdateTagNameById);

router.delete('/:id', tagController.deleteTagById);

module.exports = router;
