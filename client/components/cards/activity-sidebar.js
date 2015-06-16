Template.activitySidebar.helpers({
	messages: function() {
		return Messages.find({boardId: Session.get('boardId')}, {sort: {createdAt: -1}});
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
			case 'createCard':
			message = 'created card <a href="/card/' + this.addedCardId + '">KEI-' + this.addedCardGid + '</a>';
			break;
		}
		return message;
	}
})