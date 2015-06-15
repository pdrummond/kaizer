Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',  
  notFoundTemplate: 'notFound',
  /*waitOn: function() {
    Meteor.subscribe("cards");
  }*/
});

Router.route('/', {name: 'boards'});

Router.route('/card/:cardId', function() {
  var card = Cards.findOne(this.params.cardId);  
  var board = Boards.findOne(card.boardId);  
  Session.set("boardId", board._id);
  Session.set("cardId", card._id);
  Session.set("board", board);
  Session.set("card", card);
  this.render("cardPage");
});

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
