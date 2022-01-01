const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
	orderData: {
		type: Map,
		required: true
	},
	paidAt: {
		type: Date,
		default: Date.now()
	},
});

const Order = mongoose.model('Order', ordersSchema);

module.exports = Order;