
CreateBoxComponent = BlazeComponent.extendComponent({
  template: function() { return 'createBox'},

  events: function() {
    return [{
      "keydown #create-box-input": this.onKeydown,
    }];
  },

  onKeydown: function(ev) {
    if(ev.keyCode == 13 && ev.shiftKey == false) {
      ev.preventDefault();
      var content = $('#create-box-input').val();
      if(content.length > 0) {
        var comment = {
            boardId: Session.get('boardId'),
            cardId: Session.get('currentCardId'),
            content: content,
        };

        Meteor.call('createCommentMessage', comment, function(error, result) {
          if (error) {
            return alert(error.reason);
          } else {
            window.scrollTo(0,document.body.scrollHeight);
            $('#create-box-input').val("");
          }
        });
      }
    }
  }  
}).register('CreateBoxComponent');
