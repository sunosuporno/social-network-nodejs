const path = require('path');

const express = require('express');
const adminController = require('../controllers/admin');
const rootDir = require('../utils/path');

const router = express.Router();
const products = []
// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);
router.get('/products', adminController.getProducts)


// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct)

router.post('/edit-product', adminController.postEditProduct)

router.post('/delete-product', adminController.postDeleteProduct)

exports.routes = router;
exports.products = products;
