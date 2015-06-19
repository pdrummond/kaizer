Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',  
  notFoundTemplate: 'notFound',
  waitOn: function() {
    Meteor.subscribe("hubs");
    Meteor.subscribe("cards");
  }
});

Router.route('/', {name: 'hubListPage'});

Router.route('/hub/:hubId', function() {
  var hub = Hubs.findOne(this.params.hubId);  
  Session.set("currentHubId", this.params.hubId);
  Session.set("currentHub", hub);
  this.render("hubPage");
});

/*Router.route('/board/:boardId', function() {
  var board = Boards.findOne(this.params.boardId);  
  Session.set("boardId", board._id);
  Session.set("board", board);
  this.render("cardPage");
});*/

/*var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {only: 'cardPage'});
Router.onBeforeAction(requireLogin, {only: 'cardPage'});
*/
