Template.hubPage.helpers({
	cards: function() {
		return Cards.find();
	},

	boardActiveClass: function() {
		return Session.get("currentBoardId") == this._id ? "active" : "";
	}
})

