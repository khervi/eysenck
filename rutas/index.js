const express = require('express');
const router = express.Router();

const indexController = require('../controlador/control');

router.get('/search/:url', indexController.index);

router.get('/cuerpo', indexController.cuerpo);

router.post('/new-product', indexController.agregaProducto);

module.exports = router;