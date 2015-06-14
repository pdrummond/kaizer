Template.cardViewPage.helpers({
	messages: function() {
		return Messages.find();
	},	
});

Template.comment.helpers({
	username: function() {
		return Meteor.users.findOne(this.createdBy).username;
	}
})

Template.activity.helpers({
	username: function() {
		return Meteor.users.findOne(this.createdBy).username;
	},

	activityMessage: function() {
		var message = '?';
		switch(this.activityType) {
			case 'add-card':
			message = 'created card <a>KEI-' + this.cardAddedGid + '</a>';
			break;
		}
		return message;
	}
})