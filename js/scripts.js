$(document).ready(() => {
	var stationList = [];
	$.getJSON("js/sr70.json", function(data) {
		stationList = data.stations;
		$('.input-fields input').autocomplete({minLength: 0, source: stationList});
	});
	$('#search-results').hide();
});