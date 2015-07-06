Kaizer = Kaizer || {};

Kaizer.config = {
  addHub: function(hubAttrs) {
    return Meteor.call("createHub", hubAttrs);
  },

  addBoard: function(boardAttrs) {
    return Meteor.call('createBoard', boardAttrs);
  }
};

Meteor.methods({
  addPage: function(page) { 
    check(page, Match.Any);
    HubPages.upsert(page._id, page);    
    var page = HubPages.findOne(page._id);
    if(page.pageType === 'board') {
      /*
        If this is a board page then we need to check to see
        if a board has already been created for it.  If not, 
        then we create one here.
      */
      var hubs = Hubs.find();
      hubs.forEach(function(hub) {    
        var board = Boards.findOne({
          hubId: hub._id, 
          hubPageId: page._id
        });
        if(board == null) {
          var board = Meteor.call("createBoard", {
            title: page.pageTitle, 
            field: page.boardField || 'stack', 
            hubId: hub._id,
            hubPageId: page._id
          }, function(error, result) {        
            if (error) {
               console.error("Error creating hub board on page " + 
                page._id + " for hub " + hub._id + ":" + JSON.stringify(error));
            }
          });        
          console.log("BOARD CREATED: " + JSON.stringify(board));
        }
      });
    };
    return page;
  },
});

UI.registerHelper('currentHubPages', function(context, options) {
  return HubPages.find({hubType: Session.get("currentHub").hubType},{sort: {order: 1}});   
});


