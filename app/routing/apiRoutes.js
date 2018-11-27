

var friendsTable = require('../data/friends.js');



module.exports = function(app) {
   
    app.get('/api/friends', function(request, result) {
        result.json(friendsTable);
    });

   
   
   
   
    app.post("/api/friends", function(request, result) {
        var user = request.body;
        var newBuddy = -1;
        var newBuddyScore = 100;
        var currentBuddyScore = 0;
    
      
      
      
        for (i = 0; i < friendsTable.length; i++) {

            if (user.sex != friendsTable[i].sex) {
                for (j = 0; j < user.scores.length; j++) {

                    currentBuddyScore = currentBuddyScore + Math.abs(friendsTable[i].scores[j] - user.scores[j]);
                }
                if (currentBuddyScore <= newBuddyScore) {
                    newBuddy = i;
                    newBuddyScore = currentBuddyScore;
                }
                currentBuddyScore = 0;
            }
        }
        friendsTable.push(user);
        newFriendDetails = friendsTable[newBuddy];
        result.json(newFriendDetails);

    });
};


