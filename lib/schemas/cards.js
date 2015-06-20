var Schemas = {};

Schemas.Card = new SimpleSchema({
  hubId:    { type: String },
  boardId:  { type: String },
  stackId:  { type: String },
  cardType: { type: String },
  gid:      { type: Number },
  
  title: {
    type: String,
    label: "Title",
    max: 200
  },   
  
  status: {
    type: String,
    label: "Status",    
    max: 200,
    optional: true
  }  
});


Cards.attachSchema(Schemas.Card);
