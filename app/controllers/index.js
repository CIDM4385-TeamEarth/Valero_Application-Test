
function showLocations(e){
	var showLocations = Alloy.createController("showLocations").getView();
	showLocations.open();
}

function storeLocations(e){
	var storeLocations = Alloy.createController("storeLocations").getView();
	storeLocations.open();
}

function tripPlanner(e){
	var tripPlanner = Alloy.createController("tripPlanner").getView();
	tripPlanner.open();
}
$.index.open();