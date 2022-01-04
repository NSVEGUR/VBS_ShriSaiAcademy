const express = require('express');
const router = express.Router();
const VideoController = require('../controllers/videosController');

router
	.route('/')
	.post(VideoController.createVideo)
	.get(VideoController.getVideos);

module.exports = router;