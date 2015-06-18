Cards = new Mongo.Collection('cards');

Meteor.methods({
  createCard: function(cardAttributes) {
    check(Meteor.userId(), String);
    check(cardAttributes, {
      title: String,
      boardId: String,
      stackId: Match.Optional(String),
      parentCardId: Match.Optional(String),
      parentCardGid: Match.Optional(Number),
      cardType: String
    });
    
    var newCard = Meteor.call('doCreateCard', cardAttributes);

    Meteor.call('createActivityMessage', {
      boardId: cardAttributes.boardId,
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

TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Cards = new Tabular.Table({
  name: "CardList",
  collection: Cards,
  columns: [
    {data: "title", title: "Title"},    
    {data: "status", title: "Status"},
    {data: "milestone", title: "Milestone"},
    {
      data: "createdAt",
      title: "Created",
      render: function (val, type, doc) {
        if (val instanceof Date) {
          return moment(val).calendar();
        } else {
          return "Never";
        }
      }
    },
    {data: "summary", title: "Summary"},
    {
      tmpl: Meteor.isClient && Template.bookCheckOutCell
    }
  ]
});