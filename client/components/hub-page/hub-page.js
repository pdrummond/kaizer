Template.hubPage.helpers({
	cards: function() {
		return Cards.find({hubId: Session.get('currentHubId')});
	},

	welcomeBoardActiveClass: function() {
		return Session.get("currentBoardId") == null ? "active" : "";
	}
});

Template.hubPage.events({
	"click #welcome-board-pill": function() {
		Session.set("currentBoardId", null);
	},

	"click .board-pill": function() {
		Session.set("currentBoardId", this._id);
	}
});

Template.boardPill.helpers({
	boardActiveClass: function() {
		return Session.get("currentBoardId") == this._id ? "active" : "";
	},

	
});

