const mongoose = require('mongoose');

const videosSchema = new mongoose.Schema({
	link: {
		type: String,
		required: [true, 'Videos Schema requires a link']
	},
	heading: {
		type: String,
		default: 'VBS Shri Sai Academy'
	},
	description: {
		type: String,
		default: 'Learn to speak english fluently and confidenlty in our 46 days bootcamp'
	}
});


const Videos = mongoose.model('Videos', videosSchema);

module.exports = Videos;