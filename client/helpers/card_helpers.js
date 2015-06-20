UI.registerHelper('currentCardId', function(context, options) {
	return Session.get('currentCardId');
});

UI.registerHelper('currentCard', function(context, options) {
	return Session.get('currentCard');
});


UI.registerHelper('currentCardTitle', function(context, options) {
	return Session.get('currentCard').title;
});

UI.registerHelper('currentHubCards', function(context, options) {
	return Cards.find({hubId: Session.get('currentHubId')});
});


Card = {
	createCard: function(card) {
		card = _.extend(card, {			
			hubId: Session.get('currentHubId'),
			boardId: Session.get('currentBoardId'),
			cardType: 'normal'
		});
	    Meteor.call('createCard', card, function(error, result) {
	      if (error) {
	        return alert(error.reason);
	      } else {	      	
	        $('#add-card-input').val("");
	      }
	    });
	}
}