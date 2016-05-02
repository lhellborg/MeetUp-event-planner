console.log('\'Allo \'Allo!');

// dropdown autoselect items for event types
var eventType = ["Wedding", "Birthday", "Conferance talk", "Dinner", "Meeting", "Movie"]

// The function to show the autoselected items for the different event types
HTMLImports.whenReady(function(){
   var inputLocal = document.querySelector('#input-local');
   inputLocal.source = eventType;
});

// To fill the created event calender
  // To ensure that elements are ready on polyfilled browsers,
  // wait for WebComponentsReady.
document.addEventListener('WebComponentsReady', function() {

	var showEvent = document.getElementById('showEvent');
	var ev = document.getElementById("event");
	var evName = document.getElementById("evName");
	var name = document.getElementById('fullName');
	var guests = document.getElementById('guestList');
	var eventName = document.getElementById('eventName');
	var eventType = document.getElementById('input-local');
	var eventHost = document.getElementById('hostName');
	var eventStart = document.getElementById('start');
	var eventEnd = document.getElementById('end');
	var eventAdress = document.getElementById('address');
	var eventInfo = document.getElementById('addInfo');
	showEvent.addEventListener('click', function() {
		evName.textContent = eventName.value;
		ev.textContent = name.value + " invited " + guests.value;
	});
});