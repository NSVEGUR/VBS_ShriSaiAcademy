const fs = require('fs');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());


dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
}).then(con => {
	// console.log(con)
	console.log('DB Connection made successfull');
});

const Orders = require('../models/ordersModel');
const PaymentManager = require('../models/paymentManagerModel');
const Videos = require('../models/videosModel');


const importDataFromDB = async () => {
	const query = await Videos.find();
	fs.writeFile(`${__dirname}/paymentsCreatorData.json`, JSON.stringify(query), (err) => {
		if (err) {
			return console.log(err);
		}
		console.log("The file was saved!");
	});
}

const exportDataToDB = async () => {
	fs.readFile(`${__dirname}/videos.json`, 'utf-8', async (err, data) => {
		if (err) {
			console.log('Error in Reading the File');
		} else {
			try {
				data = JSON.parse(data);
				await Videos.create(data);
				console.log("The data in DB is created successfully!");
			} catch (err) {
				console.log(err);
			}
		}
	});
}

const deleteDataInDB = async () => {
	try {
		await Videos.deleteMany();
		console.log("The data in DB is deleted!");
	} catch (err) {
		console.log(err);
	}
}

if (process.argv[2] === '--import') {
	importDataFromDB();
} else if (process.argv[2] === '--export') {
	exportDataToDB();
} else if (process.argv[2] === '--delete') {
	deleteDataInDB();
}

const port = process.env.PORT || 3000;
app.listen(4000, () => {
	console.log(`Vegur's MacBook listening your request from port ${port}`);
});

