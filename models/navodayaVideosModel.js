const mongoose = require('mongoose');

const navodayaVideosSchema = new mongoose.Schema({
	link: {
		type: String,
		required: [true, 'Navodaya Videos Schema requires a link'],
	}
});


const NavodayaVideos = mongoose.model('NavodayaVideos', navodayaVideosSchema);

module.exports = NavodayaVideos;