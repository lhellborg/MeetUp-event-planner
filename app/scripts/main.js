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

	// // an event array to save the different events
	// var createEventArray = [
	// 	{
	// 		eventName: "",
	// 		guests: "",
	// 		eventType: "",
	// 		eventHost: "",
	// 		eventStart: "",
	// 		eventEnd: "",
	// 		eventAdress: "",
	// 		eventInfo: ""

	// 	}
	// ];

	// To fill the created event calender array with information
	  // To ensure that elements are ready on polyfilled browsers,
	  // wait for WebComponentsReady.
	document.addEventListener('WebComponentsReady', function() {

		var createEvent = document.getElementById('createEventBtn');
		var guests = document.getElementById('guestList');
		var eventName = document.getElementById('eventName');
		var eventType = document.getElementById('input-local');
		var eventHost = document.getElementById('hostName');
		var eventStart = document.getElementById('start');
		var eventEnd = document.getElementById('end');
		var eventAdress = document.getElementById('address');
		var eventInfo = document.getElementById('addInfo');
		createEvent.addEventListener('click', function() {
			console.log(createEventArray)
			// createEventArray.push({eventName: eventName.value, hostName: eventHost.value, eventType: eventType.value,
			//  guests: guests.value, start: eventStart.value, end: eventEnd.value, eventAdress: eventAdress.value, eventInfo: eventInfo.value});
			// console.log(createEventArray)
		});
	});

});