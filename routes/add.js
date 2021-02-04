var data = require("../data.json");

exports.addFriend = function(request, response) {
	var friendName = request.query.name;
	var friendDescription = request.query.description;
	//console.log(friendName + friendDescription);

	var newFriend = {
		"name": friendName,
		"description": friendDescription,
		"imageURL": "http://lorempixel.com/400/400/people"
	};

	data.friends.push(newFriend);
	console.log(data);
	//response.render('add', data);
}