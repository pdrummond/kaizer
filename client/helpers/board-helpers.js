UI.registerHelper('currentBoardTitle', function(context, options) {
	return Session.get('currentBoard').title;
});

UI.registerHelper('currentBoard', function(context, options) {
	return Session.get('currentBoard');
});