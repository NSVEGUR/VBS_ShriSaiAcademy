module.exports = function simplifyData(main, sub, idString) {
	const mainLink = `https://www.youtube.com/embed/${main.link.split('/')[3]}`;
	let subDetails = [];
	sub.map((el) => {
		const details = {
			link: `https://www.youtube.com/embed/${el.link.split('/')[3]}`,
			heading: el.heading,
			_id: el._id,
			id: `${idString}/${el._id}`,
		}
		subDetails.push(details);
	});
	const details = {
		mainLink,
		subDetails
	}
	return details;
}

