Template.boards.helpers({
	boards: function() {
		return Boards.find();
	},

});

Template.boards.events({
	"click #new-board-button": function() {
		var title = prompt("Board title:");
		Meteor.call("createBoard", {title: title}, function(error, result) {
	      if (error) {
	        return alert(error.reason);
	      }
	    });
	}
});