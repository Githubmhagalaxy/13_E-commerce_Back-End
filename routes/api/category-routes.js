const router = require('express').Router();
const { Category, Product } = require('../../models');
const { categoryController } = require('../../controllers');

// The `/api/categories` endpoint

router.get('/', categoryController.getAllCategories);

router.get('/:id', categoryController.getCategoryById);

router.post('/', categoryController.postNewCategory);

router.put('/:id', categoryController.putUpdateCategoryById);

router.delete('/:id', categoryController.deleteCategoryById);

module.exports = router;
