Template.cardBoardPage.helpers({
	stacks: function() {
		return Stacks.find();
	}
});

Template.cardBoardPage.events({
	"click #add-stack-button": function(e) {
		e.preventDefault();
		
		$("#add-stack-button").hide();
		$("#add-stack-box").show();
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
	      	Stack.createStack({stackId: this._id, title: title});	        
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
		card = _.extend(card, {cardType: 'normal'});
	    Meteor.call('createCard', card, function(error, result) {
	      if (error) {
	        return alert(error.reason);
	      } else {
	      	var $stack = $("#" + this._id);
	        $stack.find('#add-card-input').val("");
	      }
	    });
	}
}

var Stack = {
	createStack: function(stack) {		
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