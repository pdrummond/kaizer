UI.registerHelper('currentHubTitle', function(context, options) {
	return Session.get('currentHub').title;
});

UI.registerHelper('currentHubBoards', function(context, options) {	
	return Boards.find({hubId:Session.get('currentHubId')});
});

