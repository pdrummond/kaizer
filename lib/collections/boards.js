Boards = new Mongo.Collection("boards");

Meteor.methods({
  createBoard: function(boardAttributes) {
    check(Meteor.userId(), String);
    check(boardAttributes, {
      title: String      
    });
    var user = Meteor.user();
    var board = _.extend(boardAttributes, {
      createdBy: user._id,
      createdAt: new Date().getTime(),      
    });
    var boardId = Boards.insert(board);    
    return boardId;
  },
 });