Template.columnViewPage.helpers({
	stacks: function() {
		return Stacks.find({boardId: Session.get('boardId')});
	}
});

Template.columnViewPage.events({
	"click #add-stack-button": function(e) {
		e.preventDefault();
		
		$("#add-stack-button").hide();
		$("#add-stack-box").show();
		$("#add-stack-input").focus();
	},

	"click #cancel-add-stack-button": function(e) {
		e.preventDefault();

		$("#add-stack-button").show();
		$("#add-stack-box").hide();
	},

	"keydown #add-stack-input": function(ev) {
	    if(ev.keyCode == 13 && ev.shiftKey == false) {
			ev.preventDefault();	      	
	      	var title = $('#add-stack-input').val();
	      	if(title.length > 0) {
	      		Stack.createStack({title: title});	        
	      	}
	    }
	},

	"click #create-stack-button": function(e) {
		e.preventDefault();		
		var title = $('#add-stack-input').val();		
	    if(title.length > 0) {
	      	Stack.createStack({title: title});	        
	      }
	}
});
