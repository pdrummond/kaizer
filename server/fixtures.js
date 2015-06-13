
Meteor.startup(function() {	

	Stacks.remove({});
	Cards.remove({});

    	Stacks.insert({
    		_id: 'stack-1',
    		name: 'Todo'
    	});    	

    	Cards.insert({
    		_id: 'card-1',
    		stackId: 'stack-1',
    		name: 'This is the first keizer card!'
    	});

    	Cards.insert({
    		_id: 'card-2',
    		stackId: 'stack-1',
    		name: 'This is the second keizer card!'
    	});    	

    	Stacks.insert({
    		_id: 'stack-2',
    		name: 'Doing'
    	});

    	Stacks.insert({
    		_id: 'stack-3',
    		name: 'Done'
    	});

    	Cards.insert({
    		_id: 'card-3',
    		stackId: 'stack-2',
    		name: 'CARD 3'
    	});

    	Cards.insert({
    		_id: 'card-4',
    		stackId: 'stack-3',
    		name: 'CARD 4'
    	});
      
});