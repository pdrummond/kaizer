Stack = {
	createStack: function(stack) {	
		stack = _.extend({
			hubId: Session.get('currentHubId'), 
			boardId: Session.get('currentBoardId')
		}, stack);	
	    return Meteor.call('createStack', stack, function(error, result) {
	      if (error) {
	        return alert(error.reason);
	      } else {	      	
	        $('#add-stack-input').val("");
	      }
	    });
	}
}