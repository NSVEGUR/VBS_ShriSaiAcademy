const Videos = require('../models/videosModel');
const catchAsync = require('../utils/catchAsync');

exports.createVideo = catchAsync(async (req, res, next) => {
	const newVideo = await Videos.create(req.body);
	res.status(201).json({
		status: 'success',
		data: {
			videoDetails: newVideo
		}
	});
});

exports.getVideos = catchAsync(async (req, res, next) => {
	const videos = await Videos.find();
	res.status(200).json({
		status: 'success',
		data: {
			videos
		}
	});
});