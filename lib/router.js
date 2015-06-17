Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',  
  notFoundTemplate: 'notFound',
  /*waitOn: function() {
    Meteor.subscribe("cards");
  }*/
});

Router.route('/', {name: 'workspaces'});

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
