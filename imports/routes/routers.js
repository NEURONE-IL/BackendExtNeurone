
Router.route('/', function () {
    this.render('Home');
});  

Router.route('/conexion', function () {
    this.render('Conexion');
});

Router.route('/mouse-clicks', {
    name: 'ListMouseClicks',
    waitOn: function() {
        return Meteor.subscribe('mouseclicks.public');
    },
    data: function() {
        return Meteor.users.find({});       
    }
 });