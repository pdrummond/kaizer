Template.sidebar.helpers({
	sidebarView: function() {
		var viewTemplate = Session.get("currentSidebarView") || "activitySidebar";
		return viewTemplate;
	}
})