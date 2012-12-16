for (i=0; i < 10; i++) {
	var listItem = Alloy.createController('listItem',{
		done: false}).getView();
	$.todos.add(listItem)
}
