console.log('\'Allo \'Allo!');

$(document).ready(function() {

	// show and hide different sections depending on user input
	$('#newAccount').click(function() {
	  $('#createAccount').show();
	  $('#createEvent').show();
	  $('#showEvent').hide();
	  $('#newAccount').attr('checked');
	});

	$('#newEvent').click(function() {
	  $('#createEvent').show();
	  $('#createAccount').hide();
	  $('#showEvent').show();
	  $('#newEvent').attr('checked');

	});

	$('#radioShow').click(function() {
	  $('#showEvent').show();
	  $('#createAccount').hide();
	  $('#createEvent').hide();
	  $('#radioShow').attr('checked');
	});


	// The function to show the autoselected items for the different event types
	HTMLImports.whenReady(function(){
		// dropdown autoselect items for event types
		var eventType = ["Wedding", "Birthday", "Conferance talk", "Dinner", "Meeting", "Movie", "Coffe and Cake", "Brunch", "Get together", "Lunch", "Business"]
		var inputLocal = document.querySelector('#input-local');
		inputLocal.source = eventType;
	});

});