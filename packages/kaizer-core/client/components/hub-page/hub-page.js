Template.hubPage.helpers({
	cards: function() {
		return Cards.find({hubId: Session.get('currentHubId')});
	},

	welcomeBoardActiveClass: function() {
		return Session.get("currentPageId") == null ? "active" : "";
	},

	selectedPageTemplate: function() {
		var hubPage = Session.get("currentHubPage");
		return hubPage != null ? hubPage.template : "hubPageWelcomeTemplate";
	}
});

Template.hubPage.events({
	"click #welcome-board-pill": function() {
		Session.set("currentHUbPageId", null);
		Session.set("currentHubPage", null);
	},

	"click .page-pill": function() {
		Session.set("currentHubPageId", this._id);
		Session.set("currentHubPage", HubPages.findOne(this._id));
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

Template.pagePill.helpers({
	pageActiveClass: function() {
		return Session.get("currentHubPageId") == this._id ? "active" : "";
	},	
});

