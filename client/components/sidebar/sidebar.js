Template.sidebar.helpers({
	sidebarView: function() {
		var viewTemplate = Session.get("currentSidebarView") || "activitySidebar";
		return viewTemplate;
	}
})

Template.sidebar.events({
	"click #show-card-list-button": function() {
		Session.set("currentSidebarView", "cardListWidget");
	}
});