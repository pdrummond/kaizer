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

Template.stack.helpers({
	cards: function() {
		return Cards.find({stackId: this._id});
	}
});

Template.stack.events({
	"click #add-card-button": function(e) {
		e.preventDefault();

		var $stack = $("#" + this._id);		
		$stack.find("#add-card-button").hide();
		$stack.find("#add-card-box").show();
		$stack.find("#add-card-input").focus();
	},

	"click #cancel-add-card-button": function(e) {
		e.preventDefault();

		var $stack = $("#" + this._id);
		$stack.find("#add-card-button").show();
		$stack.find("#add-card-box").hide();
	},

	"keydown #add-card-input": function(ev) {
	    if(ev.keyCode == 13 && ev.shiftKey == false) {
			ev.preventDefault();
	      	var $stack = $("#" + this._id);
	      	var title = $stack.find('#add-card-input').val();
	      	if(title.length > 0) {
	      		Card.createCard({stackId: this._id, title: title});	        
	      	}
	    }
	},

	"click #create-card-button": function(e) {
		e.preventDefault();
		var $stack = $("#" + this._id);
		var title = $stack.find('#add-card-input').val();		
	    if(title.length > 0) {
	      	Card.createCard({stackId: this._id, title: title});	        
	      }
	}
});


var Card = {
	createCard: function(card) {
		card = _.extend(card, {cardType: 'normal', boardId: Session.get('boardId')});
	    Meteor.call('createCard', card, function(error, result) {
	      if (error) {
	        return alert(error.reason);
	      } else {	      	
	        $('#add-card-input').val("");
	      }
	    });
	}
}

var Stack = {
	createStack: function(stack) {	
		stack = _.extend(stack, {boardId: Session.get('boardId')});	
	    Meteor.call('createStack', stack, function(error, result) {
	      if (error) {
	        return alert(error.reason);
	      } else {	      	
	        $('#add-stack-input').val("");
	      }
	    });
	}
}

Template.stack.onRendered(function() {	
	UIkit.sortable(this.$('.uk-sortable'), {
		group: 'test'
	});
});