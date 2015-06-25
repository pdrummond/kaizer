Hubs = new Mongo.Collection("hubs");

Meteor.methods({
  createHub: function(hubAttributes) {
    check(Meteor.userId(), String);
    check(hubAttributes, {
      title: String,
      hubType: String
    });
    var user = Meteor.user();
    var hub = _.extend(hubAttributes, {
      createdBy: user._id,
      createdAt: new Date().getTime(),      
    });
    var hubId = Hubs.insert(hub);
    Meteor.call("createEmptyBoard", {title: "Stack Board", field:"stack", hubId: hubId});
    return hubId;
  },
 });