Template.stackWidget.helpers({
	cards: function() {
		return Cards.find({stackIds: this._id});
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
	    	//TODO: Once this all works, pass title and stack id into Create Card
	    	//and do all the work their instead of here.
	    	var card = {stackIds: [this._id], title: title, status: 'New'};

	    	var boardId = Session.get('currentBoardId');
	    	var boardField = Boards.findOne(boardId).field;
	    	var stackValue = this.title;
	    	card[boardField] = stackValue;
	      	Card.createCard(card);
	      }
	}
});