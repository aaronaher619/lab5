var data = require("../data.json");

exports.addFriend = function(request, response) {
	var friendName = request.query.name;
	var friendDescription = request.query.description;

	var newFriend = {
		"name": friendName,
		"description": friendDescription,
		"imageURL": "http://lorempixel.com/400/400/people"
	};

	data.friends.push(newFriend);
	response.render('index', data);
}