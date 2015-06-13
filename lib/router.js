/*Router.configure({
  layoutTemplate: 'layout',
  //waitOn: function() { return Meteor.subscribe('cards'); },
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

Router.route('/', {
  name: 'cardBoardPage',  
  template: 'cardBoardPage'
});

var requireLogin = function() {
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

Router.onBeforeAction('dataNotFound', {only: 'cardBoardPage'});
Router.onBeforeAction(requireLogin, {only: 'cardBoardPage'});*/
