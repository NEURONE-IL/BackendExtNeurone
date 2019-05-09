import { Meteor } from 'meteor/meteor';

import '../imports/routes/rest.js';
import './publish.js';

Meteor.startup(() => {
  // code to run on server at startup
  
  User = new Mongo.Collection('user');
  Action = new Mongo.Collection('action');
  Key = new Mongo.Collection('key');
  MouseCoordinates = new Mongo.Collection('mouseCoordinates');
  MouseClicks = new Mongo.Collection('mouseclicks');
  WebPage = new Mongo.Collection('webpage');
  Snipper = new Mongo.Collection('snipper');
  Bookmark = new Mongo.Collection('bookmark');
  Query = new Mongo.Collection('query');
  
  /*
    Action.remove({});
    Key.remove({});
    User.remove({});
    MouseCoordinates.remove({});
    MouseClicks.remove({});
    WebPage.remove({});
    Snipper.remove({});
    Bookmark.remove({});
    Query.remove({});
  */

});

Router.route('/users',{where: 'server'})
    .get(function(){
        var response = User.find().fetch();
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
    })

  // POST /message - {message as post data}
  // Add new message in MongoDB collection.

    .post(function(){
        var response;
        if(this.request.body.userName === undefined || this.request.body.userPassword === undefined) {
            response = {
                "error" : true,
                "message" : "invalid data"
            };
        } else {
            User.insert({
                UserName : this.request.body.userName,
                UserPassword : this.request.body.userPassword
            });
            response = {
                "error" : false,
                "message" : "User added."
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
    });

    