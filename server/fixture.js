
Meteor.startup(function() {
	Hubs.remove({});
	Cards.remove({});

	Hubs.insert({
		_id: "hub-1",
		title: "Hub One"
	});


	Cards.insert({
		_id: "card-1",
		title:"Card1",
		hubId: "hub-1",
		createdAt: "Today",
		status: "Open",
		milestone: "Sprint 1"
	});
});