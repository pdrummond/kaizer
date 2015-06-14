Template.layout.events({
	"click #card-view-button": function() {
		Session.setPersistent("viewModeTemplate", "cardViewPage");		
	},

	"click #column-view-button": function() {
		Session.setPersistent("viewModeTemplate", "columnViewPage");
	}
});

Template.layout.helpers({
	viewModeTemplate: function() {
		var template = Session.get('viewModeTemplate');
		template = template == null ? 'columnViewPage' : template;
		console.log("template: " + template);
		return template;
	}
})