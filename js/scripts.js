$(document).ready(() => {
	var stationList = [];
	$.getJSON("js/sr70.json", function(data) {
		stationList = data.stations.map((i) => {
			i.value = i.label;
			return i;
		});
		$('.input-fields input').autocomplete({minLength: 0, source: stationList});
	});
	$('.train-notes').hide();
	$('#toggle-recommended').on('change', function() {
		if ($(this).is(':checked')) {
			$('#result-2').addClass('suggested');
			$('.train-notes').fadeIn();
		}
	});
	$('.train-selection').hide();
	$('.input-fields input').on('change', function() {
		var filled = true;
		$('.input-fields input').each(function() {
			if ($(this).val() == '') {
				filled = false;
			}
		});
		if (filled) {
			$('.train-selection').fadeIn();
		}
	});

	$('#search-results').hide();
	$('#search-services').hide();
	$('#confirmation').hide();

	$('#search-inputs .search').on('click', () => {
		$('#home').slideUp();
		$('#search-inputs').addClass('fixed');
		$('#search-results').slideDown();
	});
	$('#search-results .next-step button').on('click', () => {
		$('#search-results').slideUp();
		$('#search-services').slideDown();
	});

	$('#search-services .next-step button').on('click', () => {
		$('#search-services').slideUp();
		$('#confirmation').slideDown();
	});

	function typeIn(text, field) {
		setTimeout(() => {
			if (text.length) {
				field.val(field.val() + text[0])
				typeIn(text.slice(1), field);
			}
		}, 80);
	}

	var from = $('#search-from').val();
	var to = $('#search-to').val();
	$('#search-from, #search-to').val('');
	$('#home div').on('click', () => {
		typeIn(from, $('#search-from'));
		typeIn(to, $('#search-to'));
	});
});