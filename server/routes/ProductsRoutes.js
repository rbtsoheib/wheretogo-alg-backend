const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// GET all products
router.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new product
router.post('/api/products', async (req, res) => {
  const { name, price, description } = req.body;
  const product = new Product({ name, price, description });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
