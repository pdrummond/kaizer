Cards = new Mongo.Collection('cards');

Meteor.methods({
  createCard: function(cardAttributes) {
    check(Meteor.userId(), String);
    check(cardAttributes, {
      title: String,
      stackId: Match.Optional(String),
      parentCardId: Match.Optional(String),
      parentCardGid: Match.Optional(Number),
      cardType: String
    });
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

    Meteor.call('createActivityMessage', {
      cardId: 'card-0', 
      activityType: 'add-card',
      cardAddedId: cardId,
      cardAddedGid: gid
    });

    return {
      _id: cardId
    };
  },
 });