/*
Meteor.startup(function() {
	Hubs.remove({});
	Cards.remove({});
	Boards.remove({});
	Messages.remove({});	

	Hubs.insert({
		_id: "hub-1",
		title: "Hub One"
	});

	Boards.insert({
		_id: "board-1",
		title: "Stack Board",
		hubId: "hub-1",
		field: "stack"
	})


	for(var i =0 ; i < 50; i++) {
	Cards.insert({
		_id: "card-" + i,
		title: Fake.sentence(10),
		hubId: "hub-1",
		createdAt: new Date().getTime(),
		createdBy: "pdrummond",		
		status: Fake.fromArray(['Open', 'In Progress', 'Blocked', 'In Test', 'Done']),
		milestone: Fake.fromArray(['Sprint 1', 'Sprint 10', 'Sprint 2', 'Release 1.0', 'Release Future']),
	});

	}

	Messages.insert({
		hubId: "hub-1",
		messageType: "activity",
		activityType: 'createCard',
      	addedCardId: "card-1",
      	addedCardGid: 1,
      	addedCardTitle: "card-1"
	});

	Messages.insert({
		hubId: "hub-1",
		messageType: "comment",
		activityType: 'createCard',
      	addedCardId: "card-1",
      	addedCardGid: 1,
      	addedCardTitle: "card-1"
	});
});*/