Kaizer = Kaizer || {};

Kaizer.HubPages = {
  addPage: function(pageAttrs) {
    return Meteor.call('addPage', pageAttrs);
  }
};

HubPages = new Mongo.Collection("hub-pages");

Meteor.methods({
  addPage: function(page) { 
    check(page, Match.Any);       
    var pageId = HubPages.upsert(page._id, page);
    return {
    	_id: pageId
    }
  },
});

UI.registerHelper('currentHubPages', function(context, options) {
  return HubPages.find({hubType: Session.get("currentHub").hubType});
});


