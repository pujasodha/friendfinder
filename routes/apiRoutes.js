var friendData = require("../data/peopleList.js");

var path = require('path');


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });


    app.post("/api/friends", function (req, res) {
        var userInput = req.body;
        var userResponse = userInput.scores;
        var matchName = '';
        var matchImage = '';
        var totalDifference = 10000;


        for (var i = 0; i < peopleInfo.length; i++) {
            var diff = 0;
            for (var j = 0; j < userResponse.length; j++) {
                diff += Math.abs(peopleInfo[i].scores[j] - userResponse[j]);
            }
            if (diff < totalDifference) {
                totalDifference = diff;
                matchName = peopleInfo[i].name;
                matchImage = peopleInfo[i].photo;
            }
        }
        res.json({
            status: 'OK',
            matchName: matchName,
            matchImage: matchImage
        });

    })
}