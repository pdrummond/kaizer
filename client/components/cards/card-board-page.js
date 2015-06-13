Template.cardBoardPage.helpers({
	stacks: function() {
		return Stacks.find();
	}
});

Template.stack.helpers({
	cards: function() {
		return Cards.find();
	}
});