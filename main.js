// AJAX Twitter Sidebar
(function() {
	$('#tweets').html('<img src="ajax-loader.gif" align="middle">');

	$.ajax({
		url: 'load_tweets.php',
		success: function(response) {
			$('#tweets').html(response);
		},
		error: function(err1, err2, err3) {
			console.log(err1, err2, err3);
		}
	});
})();

// Google Map
var points = {
	start: [36.05178307933835, 42.49737373046878]
};
var start = new google.maps.LatLng(points.start[0], points.start[1]);
var myOptions = {
	zoom: 2,
	center: start, // takes a LatLng object
	mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById('map'), myOptions);
var marker = new google.maps.Marker({
	position: start,
	title: "Starting Point"
});
marker.setMap(map);

// JSONP to assign markers to map
var script = document.createElement('script');
script.src = "http://api.eventful.com/json/events/search?c=music&app_key=NpmnLBfV4QKQtQ2N&page_nu mber=1&date=Future&keywords=linkin+park&callback=processJSONP";
document.getElementsByTagName('head')[0].appendChild(script);

function processJSONP(data) {
	console.log(data);

	var templateString = document.getElementById('template').innerHTML
	var template = Handlebars.compile(templateString);
	var html = "";

	// for (var i=0; i<data.events.event.length; i++) {
	var i = 0;
	while (i < data.events.event.length) {
		html += template(data.events.event[i]);
		addMarker(data.events.event[i].city_name, data.events.event[i].latitude ,data.events.event[i].longitude)
		i++;
	}
	document.getElementById('info').innerHTML = html;
}

function addMarker(city, lat, lng) {
	var newPoints = {
		newPoint: [lat, lng]
	};
	var newPoint = new google.maps.LatLng(newPoints.newPoint[0], newPoints.newPoint[1]);
	var marker = new google.maps.Marker({
		position: newPoint,
		title: city
	})
	marker.setMap(map);
	var infowindow = new google.maps.InfoWindow({
	content: city
	});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map, marker);
	});

}