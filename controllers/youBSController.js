const SpokenVideos = require('../models/spokenVideosModel');
const NavodayaVideos = require('../models/navodayaVideosModel')
const catchAsync = require('../utils/catchAsync');
const simplifyData = require('../utils/simplifyData');


exports.getSpoken = catchAsync(async (req, res) => {
	let data = await SpokenVideos.find();
	let [main, ...sub] = data;
	data = simplifyData(main, sub, 'spoken');
	res.status(200).render('youVBS', {
		title: "VBS",
		subtitle: "Spoken English",
		data: data
	});
});

exports.getCertainVideoSpoken = catchAsync(async (req, res) => {
	const main = await SpokenVideos.findById(req.params.id);
	const sub = await SpokenVideos.find();
	const data = simplifyData(main, sub, 'spoken');
	res.status(200).render('_youVBS', {
		title: "VBS",
		subtitle: "Spoken English",
		data: data
	});
});

exports.getNavodaya = catchAsync(async (req, res) => {
	let data = await NavodayaVideos.find();
	let [main, ...sub] = data;
	data = simplifyData(main, sub, 'navodaya');
	res.status(200).render('nopopyouVBS', {
		title: "VBS",
		subtitle: "Navodaya",
		data: data
	});
});

exports.getCertainVideoNavodaya = catchAsync(async (req, res) => {
	const main = await NavodayaVideos.findById(req.params.id);
	const sub = await NavodayaVideos.find();
	const data = simplifyData(main, sub, 'navodaya');
	res.status(200).render('_youVBS', {
		title: "VBS",
		subtitle: "Navodaya",
		data: data
	});
})