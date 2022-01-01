const express = require('express');
const router = express.Router();
const ViewController = require('../controllers/viewController');

router.get('/', ViewController.getMainPage);
router.get('/tutor', ViewController.getTutor);
router.get('/numerology', ViewController.getNumerology);
router.get('/institute', ViewController.getInstitute);

module.exports = router;