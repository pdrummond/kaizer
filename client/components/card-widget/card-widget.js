Template.cardWidget.events({
	"click .card-link": function() {		
		Session.set("currentCardId", this._id);
		Session.set("currentCard", this);
		Session.set("currentSidebarView", "cardDetailPage");
	}
});
