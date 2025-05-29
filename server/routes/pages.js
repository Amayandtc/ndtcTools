const express = require('express');
const router = express.Router();
const Page = require('../models/Page');

// Get content for a specific page
router.get('/:name', async (req, res) => {
  try {
    const page = await Page.findOne({ title: req.params.name });
    if (!page) return res.status(404).json({ error: 'Page not found' });
    res.json(page);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
