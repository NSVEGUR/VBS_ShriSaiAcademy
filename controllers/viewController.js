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