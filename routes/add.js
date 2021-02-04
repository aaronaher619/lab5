var data = require("../data.json");

exports.addFriend = function(request, response) {
	var friendName = request.query.name;
	var friendDescription = request.query.description;

	var newFriend = {
		"name": friendName,
		"description": friendDescription,
		"imageURL": "https://picsum.photos/400/400"
	};

	data.friends.push(newFriend);
	response.render('index', data);
}