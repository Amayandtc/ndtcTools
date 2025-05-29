const express = require('express');
const router = express.Router();
const Page = require('../models/Page');

router.post('/content', async (req, res) => {
    try {
      const { title, description } = req.body;
      const newPage = new Page({ title, description });
      await newPage.save();
      res.status(201).json({ message: 'Service created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error creating service', error });
    }
  });
module.exports = router;
