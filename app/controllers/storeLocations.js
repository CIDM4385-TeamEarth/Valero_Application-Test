function index(e){
	var index = Alloy.createController("index").getView();
	index.open();
}

function nearbyLocations(e){
	var nearbyLocations = Alloy.createController("nearbyLocations").getView();
	nearbyLocations.open();
}

function tripPlanner(e){
	var tripPlanner = Alloy.createController("tripPlanner").getView();
	tripPlanner.open();
}





var MapModule = require('ti.map');
var win =  Ti.UI.createWindow({backgroundColor: 'white', title: "Store Locations"});

//believe this enables the app to find the location of the device
Titanium.Geolocation.purpose = "Purpose";
Titanium.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;
Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
 
//
//  Sets the distance filter
//Dictates how often an event fires based on the distance the device moves
//  this value is in meters
//
// Titanium.Geolocation.distanceFilter = 1;
    Titanium.Geolocation.frequency = 1;
    Titanium.Geolocation.Android.manualMode = true;
 
    var gpsProvider = Titanium.Geolocation.Android.createLocationProvider({
        name : Titanium.Geolocation.PROVIDER_GPS,
        minUpdateTime : 0, 
        minUpdateDistance : 0
    });
 
    Titanium.Geolocation.Android.addLocationProvider(gpsProvider); 
 
    gpsProvider.minUpdateDistance = 0;
    gpsProvider.minUpdateTime = 0;



function openMap(e){
	Titanium.Geolocation.getCurrentPosition(function(e)
{
    if (e.error)
    {
        alert('Cannot get your current location');
        return;
    }
 
    var longitude = e.coords.longitude;
    var latitude = e.coords.latitude;
    var altitude = e.coords.altitude;
    var heading = e.coords.heading;
    var accuracy = e.coords.accuracy;
    var speed = e.coords.speed;
    var timestamp = e.coords.timestamp;
    var altitudeAccuracy = e.coords.altitudeAccuracy;

var opera = MapModule.createAnnotation({
    latitude: 35.13314,
    longitude: -101.897468,
    title: 'Valero Energy',
    subtitle: '7201 CANYON DR, Amarillo,TX',
    // attempt backgroundColor: "red",
    //customView: Ti.UI.backgroundColor = "red" //Ti.UI.backgroundColor
});
var bridge = MapModule.createAnnotation({
    latitude: 35.221803,
    longitude: -101.848697,
    pincolor: MapModule.ANNOTATION_AZURE,
 // Even though we are creating a button, it does not respond to Button events or animates.
 // Use the Map View's click event and monitor the clicksource property for 'leftPane'.
    leftView: Ti.UI.createButton({title: 'Detail'}),
 // For eventing, use the Map View's click event
 // and monitor the clicksource property for 'rightPane'.
    //rightButton: 'appicon.jpg',    
    title: '1425 UNIVERSITY NE/',
    subtitle: 'Valero Station, Amarillo,TX'
});

//creates map - Nhat/Ez
var map1 = MapModule.createView({
    userLocation: true,
    mapType: MapModule.NORMAL_TYPE,
    animate: true,
    region: {latitude: latitude, longitude: longitude, latitudeDelta: 0.1, longitudeDelta: 0.1 },
    // latitude: 35.13314, longitude: -101.897468
    height: Titanium.UI.FILL,
    width: Titanium.UI.FILL,
	annotations:[bridge,opera]
});

win.add(map1);
win.open();
});
}
