Template.workspaces.helpers({
	workspaces: function() {
		return Workspaces.find();
	},

});

Template.workspaces.events({
	"click #new-workspace-button": function() {
		var title = prompt("Workspace title:");
		Meteor.call("createWorkspace", {title: title}, function(error, result) {
	      if (error) {
	        return alert(error.reason);
	      }
	    });
	}
});