Template.cardDetailPage.helpers({
	messages: function() {
		return Messages.find({cardId: Session.get('currentCardId')});
	},	
});

Template.cardDetailPage.events({
	"click #card-detail-page #back-button": function() {
		Session.set("currentSidebarView", "cardListWidget");
	}
});