const express = require('express');
const router = express.Router();
const YouBSController = require('../controllers/youBSController');

router.get('/spoken', YouBSController.getSpoken);
router.get('/spoken/:id', YouBSController.getCertainVideoSpoken);
router.get('/navodaya', YouBSController.getNavodaya);
router.get('/navodaya/:id', YouBSController.getCertainVideoNavodaya);


module.exports = router;
