//api actions, only server side
Router.route('/key',{where: 'server'})
    .get(function(){
        var response = Key.find().fetch();;
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
    })
  // POST /message - {message as post data}
    .post(function(){
        var response;
        if(this.request.body.userName === undefined || this.request.body.url === undefined || this.request.body.keyCode === undefined ||
             this.request.body.time === undefined ) {
            response = {
                "error" : true,
                "message" : "invalid data to save key pressed"
            };
        } else {

            let timeNow = new Date();
            timeNow.getDate();

            Key.insert({
                userName : this.request.body.userName,
                url : this.request.body.url,
                title : this.request.body.title,
                type : this.request.body.type,
                keyCode : this.request.body.keyCode,
                charCode : this.request.body.charCode,
                wich : this.request.body.wich,
                chr : this.request.body.chr,
                localTime: this.request.body.time,
                serverTime: timeNow
            });
            response = {
                "error" : false,
                "message" : "Key added."
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
});

Router.route('/mouseposition',{where: 'server'})
    .get(function(){
        var response = MouseCoordinates.find().fetch();;
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
    })
  // POST /message - {message as post data}
    .post(function(){
        var response;
        if(this.request.body.userName === undefined || this.request.body.url === undefined || this.request.body.x_win === undefined ||
            this.request.body.y_win === undefined || this.request.body.time === undefined ) {
            response = {
                "error" : true,
                "message" : "invalid data to save mouse coordenates"
            };
        } else {

            let timeNow = new Date();
            timeNow.getDate();

            MouseCoordinates.insert({
                userName : this.request.body.userName,
            	url: this.request.body.url,
                title: this. request.body.title,
                x_win: this.request.body.x_win,
                y_win: this.request.body.y_win,
                w_win: this.request.body.w_win,
                h_win: this.request.body.h_win,
                x_doc: this.request.body.x_doc,
                y_doc: this.request.body.y_doc,
                w_doc: this.request.body.w_doc,
                h_doc: this.request.body.h_doc,
                localTime: this.request.body.time,
                serverTime: timeNow
            });
            response = {
                "error" : false,
                "message" : "New mouse coordinates added."
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
});

Router.route('/mouseclick',{where: 'server'})
    .get(function(){
        var response = MouseClicks.find().fetch();;
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
    })
  // POST /message - {message as post data}
    .post(function(){
        var response;
        if(this.request.body.userName === undefined || this.request.body.url === undefined || this.request.body.x_win === undefined ||
            this.request.body.y_win === undefined || this.request.body.time === undefined ) {
            response = {
                "error" : true,
                "message" : "invalid data to mouse clicks"
            };
        } else {
            let timeNow = new Date();
            timeNow.getDate();

            MouseClicks.insert({
                userName : this.request.body.userName,
                url: this.request.body.url,
                title: this. request.body.title,
                x_win: this.request.body.x_win,
                y_win: this.request.body.y_win,
                w_win: this.request.body.w_win,
                h_win: this.request.body.h_win,
                x_doc: this.request.body.x_doc,
                y_doc: this.request.body.y_doc,
                w_doc: this.request.body.w_doc,
                h_doc: this.request.body.h_doc,
                localTime: this.request.body.time,
                serverTime: timeNow
            });
            response = {
                "error" : false,
                "message" : "New mouse coordinates added."
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
});

//api actions, only server side
Router.route('/action',{where: 'server'})
    .get(function(){
        var response = Action.find().fetch();;
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
    })
  // POST /message - {message as post data}
  // Add new message in MongoDB collection.
    .post(function(){
        var response;
        if(this.request.body.userName === undefined || this.request.body.action === undefined || this.request.body.idtab === undefined ||
             this.request.body.url === undefined || this.request.body.title === undefined ) {
            response = {
                "error" : true,
                "message" : "invalid data to save action of user"
            };
        } else {

            let timeNow = new Date();
            timeNow.getDate();

            Action.insert({
                UserName : this.request.body.userName,
                action :  this.request.body.action,
                idTab : this.request.body.idtab,
                url:  this.request.body.url,
                title:  this.request.body.title,
                localTime:  this.request.body.time,
                serverTime: timeNow

            });
            response = {
                "error" : false,
                "message" : "Action added."
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
});

//url web page visit
Router.route('/webpage',{where: 'server'})
    .get(function(){
        var response = WebPage.find().fetch();;
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
    })
  // POST /message - {message as post data}
    .post(function(){
        var response;
        if(this.request.body.userName === undefined || this.request.body.url === undefined || this.request.body.title === undefined ||
            this.request.body.timeZero === undefined || this.request.body.timeFinal === undefined ||
             this.request.body.timeInThePage === undefined || this.request.body.idTab === undefined) {
            response = {
                "error" : true,
                "message" : "invalid data to save web page"
            };
        } else {
            let timeNow = new Date();
            timeNow.getDate();

            WebPage.insert({
                userName : this.request.body.userName,
                url: this.request.body.url,
                title: this.request.body.title,
                timeZero: this.request.body.timeZero,
                timeFinal: this.request.body.timeFinal,
                timeInThePage: this.request.body.timeInThePage,
                idTab: this.request.body.idTab,
                serverTime: timeNow
            });
            response = {
                "error" : false,
                "message" : "New page visit added."
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
});

//fragments of text 
Router.route('/snipper',{where: 'server'})
    .get(function(){
        var response = Snipper.find().fetch();;
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
    })
  // POST /message - {message as post data}
    .post(function(){
        var response;
        if(this.request.body.userName === undefined || this.request.body.text === undefined || this.request.body.url === undefined ||
            this.request.body.time === undefined ) {
            response = {
                "error" : true,
                "message" : "invalid data to save snipper"
            };
        } else {
            let timeNow = new Date();
            timeNow.getDate();

            Snipper.insert({
                userName : this.request.body.userName,
                type : this.request.body.type,
                text: this.request.body.text,
                url: this.request.body.url,
                title: this.request.body.title,
                localTime: this.request.body.time,
                serverTime: timeNow
            });
            response = {
                "error" : false,
                "message" : "New snipper added."
                
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
});


//Bookmarks of user 
Router.route('/bookmark',{where: 'server'})
    .get(function(){
        var response = Bookmark.find().fetch();;
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
    })
  // POST /message - {message as post data}
    .post(function(){
        var response;
        if(this.request.body.userName === undefined || this.request.body.url === undefined ||
            this.request.body.time === undefined ) {
            response = {
                "error" : true,
                "message" : "invalid data to bookmark"
            };
        } else {
            let timeNow = new Date();
            timeNow.getDate();

            Bookmark.insert({
                userName : this.request.body.userName,
                type : this.request.body.type,
                url: this.request.body.url,
                title: this.request.body.title,
                localTime: this.request.body.time,
                serverTime: timeNow
            });
            response = {
                "error" : false,
                "message" : "New bookmark added."
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
});

//Querys of user 
Router.route('/query',{where: 'server'})
    .get(function(){
        var response = Query.find().fetch();;
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
    })
  // POST /message - {message as post data}
    .post(function(){
        var response;
        if(this.request.body.userName === undefined || this.request.body.query === undefined ||
            this.request.body.time === undefined ) {
            response = {
                "error" : true,
                "message" : "invalid data to query"
            };
        } else {
            let timeNow = new Date();
            timeNow.getDate();

            Query.insert({
                userName : this.request.body.userName,
                query: this.request.body.query,
                localTime: this.request.body.time,
                serverTime: timeNow
            });
            response = {
                "error" : false,
                "message" : "New query added."
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
});