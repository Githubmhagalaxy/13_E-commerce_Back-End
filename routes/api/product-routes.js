const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');
const { productController } = require('../../controllers');

// The `/api/products` endpoint

// get all products
router.get('/', productController.getAllProducts);

// get one product
router.get('/:id', productController.getProductById);

// create new product
router.post('/', productController.postNewProduct);

// update product
router.put('/:id', productController.putUpdateProductById);

router.delete('/:id', productController.deleteProductById);

module.exports = router;
