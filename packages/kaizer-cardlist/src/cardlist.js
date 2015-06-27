if(Meteor.isClient) {
	Template.cardListerHubPage.helpers({
		cards: function() {
			return Cards.find();
		}
	});
}