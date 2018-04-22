var friendsData = require("../data/peopleList.js");

var path = require('path');


module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.json(friendsData);
	});

	app.post('/api/friends', function(req, res) {
		var newFriend = {
			name: req.body.name,
			photo: req.body.photo,
			scores: []
		}
		var scoresArray = []
		for (var i=0; i< req.body.scores.length; i++) {
			scoresArray.push(parseInt(req.body.scores[i]))
		}
		newFriend.scores = scoresArray

		var scoreComparison = []
		for(var i=0; i < friendsData.length; i++){

			var currentComparison = 0
			for(var j=0; j < newFriend.scores.length; j++){
				currentComparison += Math.abs(newFriend.scores[j] - friendsData[i].scores[j])

				scoreComparison.push(currentComparison)
			}

			var bestMatch = 0
			for (var i =1; i < scoreComparison.length; i++){
				if(scoreComparison[i] <= scoreComparison[bestMatch]){
					bestMatch = i;
				}
			}

			var bestFriendMatch = friendsData[bestMatch]

			res.json(bestFriendMatch)

			friendsData.push(newFriend)
		}
	})
}
