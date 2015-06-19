Template.cardListWidget.events({
	"click #card-list-widget #back-button": function() {
		Session.set("currentSidebarView", "activitySidebar");
	}
})