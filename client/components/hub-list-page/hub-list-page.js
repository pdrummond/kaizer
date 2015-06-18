Template.hubListPage.helpers({
	hubs: function() {
		return Hubs.find();
	},

});

Template.hubListPage.events({
	"click #new-hub-button": function() {
		var title = prompt("Hub title:");
		Meteor.call("createHub", {title: title}, function(error, result) {
	      if (error) {
	        return alert(error.reason);
	      }
	    });
	}
});