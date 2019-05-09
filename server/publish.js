
Meteor.publish('mouseclicks.public', function() {
    return  MouseClicks.find({});

});


