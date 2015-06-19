Stack = {
	createStack: function(stack) {	
		stack = _.extend(stack, {hubId: Session.get('currentHubId')});	
	    Meteor.call('createStack', stack, function(error, result) {
	      if (error) {
	        return alert(error.reason);
	      } else {	      	
	        $('#add-stack-input').val("");
	      }
	    });
	}
}