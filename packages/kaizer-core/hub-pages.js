Kaizer = Kaizer || {};

Kaizer.HubPages = {
  addPage: function(pageAttrs) {
    return Meteor.call('addPage', pageAttrs);
  }
};

var HubPages = new Mongo.Collection("hub-pages");

Meteor.methods({
  addPage: function(page) { 
    check(page, Match.Any);       
    var pageId = HubPages.upsert(page._id, page);
    return HubPages.findOne(pageId);
  },
});

