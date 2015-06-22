var Schemas = {};

Schemas.Card = new SimpleSchema({
  hubId:    { type: String },
  stackIds: { type: [String], optional:true},
  cardType: { type: String, optional:true},
  //gid:      { type: Number },
  
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
  },

  stack: {
    type: String,
    label: "Stack",
    max: 200,
    optional: true
  }  
});


Cards.attachSchema(Schemas.Card);
