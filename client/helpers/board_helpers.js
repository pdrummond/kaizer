UI.registerHelper('currentBoardTitle', function(context, options) {
	return Session.get('board').title;
});