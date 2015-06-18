var Schemas = {};

Schemas.Card = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },   
  status: {
    type: String,
    label: "Status",
    max: 200
  }
});

//Cards.attachSchema(Schemas.Card);
