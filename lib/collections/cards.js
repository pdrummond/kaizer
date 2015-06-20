Cards = new Mongo.Collection('cards');

Meteor.methods({
  createCard: function(cardAttributes) {
    check(Meteor.userId(), String);
    check(cardAttributes, {
      title: String,
      hubId: String,
      boardId: String,
      stackId: Match.Optional(String),
      parentCardId: Match.Optional(String),
      parentCardGid: Match.Optional(Number),
      cardType: String
    });
    
    var newCard = Meteor.call('doCreateCard', cardAttributes);

    Meteor.call('createActivityMessage', {
      hubId: cardAttributes.hubId,
      activityType: 'createCard',
      addedCardId: newCard._id,
      addedCardGid: newCard.gid,
      addedCardTitle: newCard.title
    });

    return newCard;
  },

  doCreateCard: function(cardAttributes) {
    check(cardAttributes, Match.Any);
    var gid;
    if(Meteor.isServer) {
      gid = incrementCounter(Counters, "cards");
    }
    var user = Meteor.user();
    var card = _.extend(cardAttributes, {
      createdBy: user._id,
      createdAt: new Date().getTime(),
      gid: gid
    });
    var cardId = Cards.insert(card);

    return Cards.findOne(cardId);
  }
 });