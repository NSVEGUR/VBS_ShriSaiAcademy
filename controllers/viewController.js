exports.getMainPage = (req, res) => {
	res.status(200).render('base', {
		title: "VBS Shri Sai Academy"
	});
};
exports.getTutor = (req, res) => {
	res.status(200).render('tutor', {
		title: "VBS Shri Sai Academy",
		subtitle: "Tutor"
	});
};
exports.getNumerology = (req, res) => {
	res.status(200).render('numerology', {
		title: "VBS Shri Sai Academy",
		subtitle: "Numerology"
	});
};
exports.getInstitute = (req, res) => {
	res.status(200).render('institute', {
		title: "VBS Shri Sai Academy",
		subtitle: "Institute"
	});
};

exports.getPrivacyPolicy = (req, res) => {
	res.status(200).render('privacypolicy', {
		title: "VBS Shri Sai Academy",
		subtitle: "Privacy Policy"
	});
}
exports.getTermsAndConditions = (req, res) => {
	res.status(200).render('terms', {
		title: "VBS Shri Sai Academy",
		subtitle: "Terms and Conditions"
	});
}
exports.getRefundPolicy = (req, res) => {
	res.status(200).render('refundpolicy', {
		title: "VBS Shri Sai Academy",
		subtitle: "Returns and Refunds Policy"
	});
}