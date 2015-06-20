Hubs = new Mongo.Collection("hubs");

Meteor.methods({
  createHub: function(hubAttributes) {
    check(Meteor.userId(), String);
    check(hubAttributes, {
      title: String      
    });
    var user = Meteor.user();
    var hub = _.extend(hubAttributes, {
      createdBy: user._id,
      createdAt: new Date().getTime(),      
    });
    var hubId = Hubs.insert(hub);
    Meteor.call("createBoard", {title: "Stack Board", field:"stack", hubId: hubId});
    Meteor.call("createBoard", {title: "Status Board", field:"status", hubId: hubId});
    Meteor.call("createBoard", {title: "Milestone Board", field:"milestone", hubId: hubId});

    return hubId;
  },
 });