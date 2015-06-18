
Meteor.startup(function() {
	Hubs.remove({});
	Cards.remove({});

	Hubs.insert({
		_id: "hub-1",
		title: "Hub One"
	});


	for(var i =0 ; i < 1000; i++) {
	Cards.insert({
		_id: "card-" + i,
		title: Fake.sentence(10),
		hubId: "hub-1",
		createdAt: new Date(),
		status: Fake.fromArray(['Open', 'In Progress', 'Blocked', 'In Test', 'Done']),
		milestone: Fake.fromArray(['Sprint 1', 'Sprint 10', 'Sprint 2', 'Release 1.0', 'Release Future']),
	});
	}
});