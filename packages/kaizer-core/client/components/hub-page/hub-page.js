Template.hubPage.helpers({
	cards: function() {
		return Cards.find({hubId: Session.get('currentHubId')});
	},

	selectedPageTemplate: function() {
		var hubPage = Session.get("currentHubPage");		
		template = hubPage != null ? hubPage.template : "";
		console.log("selectedPageTemplate: " + template);
		return template;
	}
});

Template.hubPage.events({
	"click .page-pill": function() {
		Session.set("currentHubPageId", this._id);
		Session.set("currentHubPage", HubPages.findOne(this._id));
		if(this.pageType == "board") {
			var board = Boards.findOne({
				hubId: Session.get('currentHubId'), 
				hubPageId: this._id
			});
			if(board != null) {
				Session.set("currentBoard", board);
				Session.set("currentBoardId", board._id);
			} else {
				console.error("Unable to find a board for this page. Please check your config.js");
			}
		}
	},

	/*"click #new-board-button": function() {
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
	}*/
});

Template.pagePill.helpers({
	pageActiveClass: function() {
		return Session.get("currentHubPageId") == this._id ? "active" : "";
	},	

	pageIcon: function() {
		return this.pageIcon || 'fa-square';
	}
});

