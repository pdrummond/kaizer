Template.hubListPage.helpers({
	hubs: function() {
		return Hubs.find();
	},

});

Template.hubListPage.events({
	"click #new-hub-button": function() {
		var title = prompt("Hub title:");
		if(title != null) {
			Meteor.call("createHub", {title: title, hubType: 'standard'}, function(error, result) {
		      if (error) {
		        return alert(error.reason);
		      }
		    });
		}
	}
});