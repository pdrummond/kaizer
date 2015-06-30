Boards = new Mongo.Collection("boards");

Meteor.methods({

  createBoard: function(boardAttributes) {
    console.log("createdBoard(" + JSON.stringify(boardAttributes) + ")");
    check(Meteor.userId(), String);
    check(boardAttributes, {
      hubId: String,
      hubPageId: String,
      title: String,
      field: String
    });
    var board = Meteor.call("createEmptyBoard", boardAttributes);
    console.log("BOOM-1 - empty board created: " + JSON.stringify(board));
    var stacks = {};
    cards = Cards.find({hubId: board.hubId});
    console.log("BOOM-2");
    cards.forEach(function(card) {      
      var stack;
      console.log("BOOM-3");
      if(card.status != null && card.status.length > 0) {
        if(!_.has(stacks, card.status)) {      
          console.log("BOOM-4");

          stack = Meteor.call('createStack', {
            title: card.status,
            boardId: board._id, 
            hubId: board.hubId
          });
          stacks[card.status] = stack;
        } else {
          stack = stacks[card.status];
        } 
        Meteor.call("addStackIdToCard", card._id, stack._id);
      }
    });
    return board;
  },

  createEmptyBoard: function(boardAttributes) {
    check(Meteor.userId(), String);
    check(boardAttributes, {
      hubId: String,
      hubPageId: String,      
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