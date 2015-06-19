UI.registerHelper('currentCardTitle', function(context, options) {
	return Session.get('currentCard').title;
});

UI.registerHelper('currentHubCards', function(context, options) {
	return Cards.find({hubId: Session.get('currentHubId')});
});

