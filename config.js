Kaizer.HubPages.addPage({
	_id: 'welcome-page',
	pageTitle: "Welcome",
	pageIcon: 'fa-smile-o',
	template: 'hubWelcomePage',
	hubType: 'standard',
	order: 1
});


Kaizer.HubPages.addPage({
	_id: 'page-one',
	template: 'cardListerHubPage',
	pageTitle: 'Issues',
	hubType: 'standard',
	cardTypes: ['issue', 'task'],
	order:2
});

Kaizer.HubPages.addPage({
	_id: 'page-two',
	template: 'cardListerHubPage',
	pageTitle: 'Questions',
	hubType: 'standard',
	cardTypes: ['issue', 'task'],
	order:3
});

Kaizer.HubPages.addPage({
	_id: 'page-three',
	template: 'boardHubPage',
	pageTitle: 'Roadmap',
	hubType: 'standard',
	order:4
});