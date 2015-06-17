Workspaces = new Mongo.Collection("workspaces");

Meteor.methods({
  createWorkspace: function(workspaceAttributes) {
    check(Meteor.userId(), String);
    check(workspaceAttributes, {
      title: String      
    });
    var user = Meteor.user();
    var workspace = _.extend(workspaceAttributes, {
      createdBy: user._id,
      createdAt: new Date().getTime(),      
    });
    var workspaceId = Workspaces.insert(workspace);    
    return workspaceId;
  },
 });