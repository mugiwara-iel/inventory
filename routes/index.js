const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController');

//Route to get all products
router.get('/product',userController.getAllProduct);
//Route to search a product by id
router.get('/product/:id',userController.getProductById);
//Route to create a new product
router.post('/product',userController.createProduct);

module.exports=router;