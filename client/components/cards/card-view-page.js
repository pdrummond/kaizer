Template.cardViewPage.helpers({
	messages: function() {
		return Messages.find({cardId: Session.get('currentCardId')});
	},	
});

Template.cardViewPage.events({
	"click #card-view-page #back-button": function() {
		Session.set("currentSidebarView", "cardListWidget");
	}
});