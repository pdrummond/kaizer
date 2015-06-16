Template.cardPage.events({
	"click #card-view-button": function() {
		Session.setPersistent("viewModeTemplate", "cardViewPage");		
	},

	"click #column-view-button": function() {
		Session.setPersistent("viewModeTemplate", "columnViewPage");
	},

	"click #toggle-desc": function() {
		$("#card-description").toggle();
	}
});

Template.cardPage.helpers({
	boardTitle: function() {
		return Session.get("board").title;
	},
	
	viewModeTemplate: function() {
		/*var template = Session.get('viewModeTemplate');
		template = template == null ? 'columnViewPage' : template;
		console.log("template: " + template);
		return template;*/
		return "columnViewPage";
	}
})