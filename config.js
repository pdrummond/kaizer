Kaizer.config.addPage({
	_id: 'welcome-page',	
	pageTitle: "Welcome",
	pageIcon: 'fa-smile-o',
	template: 'hubWelcomePage',
	hubType: 'standard',
	order: 1
});


Kaizer.config.addPage({
	_id: 'page-one',
	template: 'cardListerHubPage',
	pageTitle: 'Issues',
	hubType: 'standard',
	cardTypes: ['issue', 'task'],
	order:2
});

Kaizer.config.addPage({
	_id: 'page-two',
	template: 'cardListerHubPage',
	pageTitle: 'Questions',
	hubType: 'standard',
	cardTypes: ['issue', 'task'],
	order:3
});

Kaizer.config.addPage({
	_id: 'page-three',
	pageType: 'board',	
	template: 'boardHubPage',
	pageTitle: 'Roadmap',
	hubType: 'standard',
	order:4
});