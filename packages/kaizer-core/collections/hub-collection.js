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

    var boardPages = HubPages.find({hubType: hubAttributes.hubType});
    boardPages.forEach(function(page) {
      if(page.pageType == 'board') {
        var board = Meteor.call("createBoard", {
          title: page.pageTitle, 
          field: page.boardField || 'stack', 
          hubId: hubId,
          hubPageId: page._id
        }, function(error, result) {
          if (error) {
            console.error("Error creating hub board on page " + 
              page._id + " for hub " + hubId + ":" + error.message);
          }
        });        
      }
    });
    return hubId;
  },
 });