Messages = new Mongo.Collection("messages");

Meteor.methods({
  createActivityMessage: function(messageAttributes) {
    check(messageAttributes, {
      activityType: String,
      hubId: String,
      addedCardId: String,
      addedCardGid: Meteor.isServer?Number:Match.Any,
      addedCardTitle: String
    });
    messageAttributes = _.extend(messageAttributes, {
      messageType: 'activity'
    });
    return Meteor.call('doCreateMessage', messageAttributes);
  },

  createCommentMessage: function(messageAttributes) {
    check(Meteor.userId(), String);
    check(messageAttributes, {
      hubId: String,
      cardId: String,
      content: String,      
    });
    messageAttributes = _.extend(messageAttributes, {
      messageType: 'comment'
    });    
    return Meteor.call('doCreateMessage', messageAttributes);
  },

  doCreateMessage: function(messageAttributes) {
    check(messageAttributes, Match.Any);
    var user = Meteor.user();
    var message = _.extend(messageAttributes, {
      createdBy: user._id,
      createdAt: new Date().getTime(),
      createdByImageUrl: Gravatar.imageUrl(user.emails[0].address, {size: 34, default: 'retro'}),
    });
    var messageId = Messages.insert(message);
    return {
      _id: messageId
    };
  }
 });