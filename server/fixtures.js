
Meteor.startup(function() {	

	Stacks.remove({});
	Cards.remove({});

    	Stacks.insert({
    		_id: 'stack-1',
    		title: 'Todo'
    	});    	

    	Cards.insert({
    		_id: 'card-1',
    		stackId: 'stack-1',
    		title: 'This is the first keizer card!'
    	});

    	Cards.insert({
    		_id: 'card-2',
    		stackId: 'stack-1',
    		title: 'This is the second keizer card!'
    	});    	

    	Stacks.insert({
    		_id: 'stack-2',
    		title: 'Doing'
    	});

    	Stacks.insert({
    		_id: 'stack-3',
    		title: 'Done'
    	});

    	Cards.insert({
    		_id: 'card-3',
    		stackId: 'stack-2',
    		title: 'CARD 3'
    	});

        Cards.insert({
            _id: 'card-4',
            stackId: 'stack-3',
            title: 'CARD 4'
        });

        Cards.insert({
            _id: 'card-5',
            stackId: 'stack-3',
            title: 'CARD 5'
        });
      
});