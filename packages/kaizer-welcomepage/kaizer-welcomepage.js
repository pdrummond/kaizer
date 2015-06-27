if(Meteor.isClient) {
	Template.hubWelcomePage.helpers({
		cards: function() {
			return Cards.find();
		}
	});
}
