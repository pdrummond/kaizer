Stacks = new Mongo.Collection('stacks');

Meteor.methods({
  createStack: function(stackAttributes) {
    check(Meteor.userId(), String);
    check(stackAttributes, {
      hubId: String,
      title: String      
    });    
    var user = Meteor.user();
    var stack = _.extend(stackAttributes, {
      createdBy: user._id,
      createdAt: new Date().getTime(),      
    });
    var stackId = Stacks.insert(stack);
    return {
      _id: stackId
    };
  },
 });