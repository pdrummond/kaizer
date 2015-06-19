Template.stackWidget.helpers({
	cards: function() {
		return Cards.find({stackId: this._id});
	}
});

Template.stackWidget.events({
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