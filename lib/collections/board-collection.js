Boards = new Mongo.Collection("boards");

Meteor.methods({

  createBoard: function(boardAttributes) {
    var board = Meteor.call("createNewBoard", boardAttributes);
    var stacks = [];
    _.each(Cards.find({hubId: board.hubId}, function(card) {
      //Loop through all cards, get the status value. 
      if(_.contains(stacks, card.status)) {
        
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