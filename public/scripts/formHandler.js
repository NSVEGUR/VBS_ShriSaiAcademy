//VARIABLES
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const mobileInput = document.querySelector('#mobile');
const message = document.querySelector('#message');
const success = document.querySelector('#success');
const errorNodes = document.querySelectorAll('.error');
const form = document.querySelector('form');
const configDetails = {
	"host": "smtp.gmail.com",
	"username": "srinivasvegur03@gmail.com",
	"password": 'aospfrqjmiqmhtpu',
	"toAddress": 'saisrinivas0077@gmail.com',
	"fromAddress": "srinivasvegur03@gmail.com",
	"subject": "VBS Academy (New Contact Form Enquiry)",
};
let card = `<section style="border: 1.5px solid #ced4da; padding: 3px; font-size: 15px;">
	<h5 style="font-size: 10px;  text-align: center">VBS Shri Sai Academy<h5>  
	<div style="align: center;" align="center">
	 <img alt="VBS Shri Sai Academy" src="https://raw.githubusercontent.com/ShriSaiAcademy/Logo/main/logo.png" height="80px"/>
	</div>
	<br/>
	<div style="padding: 5px;">
	<h5>New Contact Form Enquiry</h5>
		<p style="color: #adb5bd;">Name: {$NAME$}</p>
		<p style="color: #adb5bd;">Mobile: {$MOBILE$}</p>
		<p style="color: #adb5bd;">Email: {$EMAIL$}</p>
		<p style="color: #adb5bd;">Message: {$MESSAGE$}</p> 
	</div>
	<hr/>
	<p style="font-size: 7px;  color: #adb5bd; text-align: center">&copy; 2022 VBS Shri Sai Academy<p>
</section>`;

class HandleForm {
	constructor() {
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			this._validateForm();
		})
	}
	//validating the form
	_validateForm() {
		this._clear();
		let hasError = false;
		if (nameInput.value.length === 0) {
			errorNodes[0].innerText = "Name cannot be empty";
			nameInput.classList.add('error-border');
			hasError = true;
		}
		if (!this._emailIsValid(email.value)) {
			errorNodes[1].innerText = "Invalid email address";
			emailInput.classList.add('error-border');
			hasError = true;
		}
		if (!this._numberIsValid(mobile.value)) {
			errorNodes[2].innerText = "Invalid mobile number";
			emailInput.classList.add('error-border');
			hasError = true;
		}

		if (message.value.length === 0) {
			errorNodes[3].innerText = "Please enter message";
			message.classList.add('error-border');
			hasError = true;
		}
		if (!hasError) {
			const Data = {
				"name": nameInput.value,
				"email": emailInput.value,
				"message": message.value,
				"mobile": mobileInput.value,
			}
			this._sendEmail(Data);
			success.style.color = "var(--tertiary-dark-color)";
			success.innerText = "Sending.....";
		}
	}
	//clearing the errorNodes
	_clear() {
		errorNodes.forEach((errorNode) => {
			errorNode.innerText = "";
		})
		success.innerText = '';
		nameInput.classList.remove('error-border');
		emailInput.classList.remove('error-border');
		mobileInput.classList.remove('error-border');
		message.classList.remove('error-border');
	}
	//checking if email is valid
	_emailIsValid(email) {
		let pattern = /\S+@\S+\.\S+/;
		return pattern.test(email);
	}
	//checking mobile number is correct or not
	_numberIsValid(number) {
		let pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
		return pattern.test(number);
	}
	//sending Mail
	_sendEmail(Data) {
		card = card.replace('{$NAME$}', Data.name).replace('{$EMAIL$}', Data.email).replace('{$MESSAGE$}', Data.message).replace('{$MOBILE$}', Data.mobile);
		Email.send({
			Host: configDetails.host,
			Username: configDetails.username,
			Password: configDetails.password,
			To: configDetails.toAddress,
			From: configDetails.fromAddress,
			Subject: configDetails.subject,
			Body: card,
			// `Name: ${Data.name} <br/>Email: ${Data.email} <br/>Message: ${Data.message} <br/>`
		}).then(
			message => {
				alert(message);
				success.style.color = "green";
				success.innerText = "Success!";
				form.reset();
				setTimeout(() => {
					success.innerText = "";
				}, 5000);
			}
		);
	}
}
new HandleForm();