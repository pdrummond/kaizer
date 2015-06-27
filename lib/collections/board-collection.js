Boards = new Mongo.Collection("boards");

Meteor.methods({

  createBoard: function(boardAttributes) {
    check(Meteor.userId(), String);
    check(boardAttributes, {
      hubId: String,
      title: String,
      field: String
    });
    var board = Meteor.call("createEmptyBoard", boardAttributes);
    var stacks = {};
    cards = Cards.find({hubId: board.hubId});
    cards.forEach(function(card) {      
      var stack;
      if(card.status != null && card.status.length > 0) {
        if(!_.has(stacks, card.status)) {      
          stack = Meteor.call('createStack', {title: card.status, boardId: board._id, hubId: board.hubId});
          stacks[card.status] = stack;
        } else {
          stack = stacks[card.status];
        } 
        Meteor.call("addStackIdToCard", card._id, stack._id);
      }
    });
  },

  createEmptyBoard: function(boardAttributes) {
    check(Meteor.userId(), String);
    check(boardAttributes, {
      hubId: String,
      title: String,
      field: String
    });
    var user = Meteor.user();
    var board = _.extend(boardAttributes, {
      createdBy: user._id,
      createdAt: new Date().getTime(),      
    });
    var boardId = Boards.insert(board);    
    return Boards.findOne(boardId);
  },
 });