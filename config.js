Kaizer.config.addCardType("taskCard", 
	extendsCard: "defaultCard",
	fields: [{
		status: Choice([
				 {value: "open", 		color: "gray", 		title:"Open"}, 
				 {value: "in-progress", color: "green", 	title:"In-Progress"}, 
				 {value: "blocked", 	color: "red", 		title:"Blocked"}, 
				 {value: "in-test", 	color: "blue", 		title:"In-Test"}, 
				 {value: "done", 		color: "lightgray", title: "Done"}
				]),
		milestone: String	
	}],
	isActionable: true,
	consideredDoneWhen: {fieldName: "status", value: "done"}
});

Kaizer.config.addHubType("project-management", {	
	title: "Project Management",
	boards: [{
		title:"Cards",
		boardType: "kaizer:single-list-board",
		filterDropdownFields: ["status", "votes", "releases"]
	}, {
		title:"Milestones",
		boardType: "kaizer:column-list-board"
		statusField: "milestone"
	}]
});