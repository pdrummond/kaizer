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
		Session.set("currentBoard", null);
	},

	"click .board-pill": function() {
		Session.set("currentBoardId", this._id);
		Session.set("currentBoard", Boards.findOne(this._id));
	},

	"click #new-board-button": function() {
		var title = prompt("Enter board name: ");
		if(title != null) {
			Meteor.call("createBoard", {title: title, field:"status", hubId: Session.get("currentHubId")},
				function(error, result) {
					if (error) {
						return alert(error.reason);
					} else {	      	

					}
				});
		}
	}
});

Template.boardPill.helpers({
	boardActiveClass: function() {
		return Session.get("currentBoardId") == this._id ? "active" : "";
	},

	
});

