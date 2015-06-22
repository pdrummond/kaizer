Stack = {
	createStack: function(stack) {	
		stack = _.extend(stack, {
			hubId: Session.get('currentHubId'), 
			boardId: Session.get('currentBoardId')
		});	
	    Meteor.call('createStack', stack, function(error, result) {
	      if (error) {
	        return alert(error.reason);
	      } else {	      	
	        $('#add-stack-input').val("");
	      }
	    });
	}
}