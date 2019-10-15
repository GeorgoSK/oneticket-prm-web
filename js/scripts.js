$(document).ready(() => {
	var stationList = [];
	$.getJSON("js/sr70.json", function(data) {
		stationList = data.stations.map((i) => {
			i.value = i.label;
			return i;
		});
		$('.input-fields input').autocomplete({minLength: 0, source: stationList});
	});
	//$('#search-results').hide();
});