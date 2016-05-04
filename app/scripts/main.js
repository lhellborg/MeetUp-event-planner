console.log('\'Allo \'Allo!');

$(document).ready(function() {
	$('#newAccount').click(function() {
	  $('#createAccount').show();
	  $('#createEvent').hide();
	  $('#showEvent').hide();
	});

	$('#newEvent').click(function() {
	  $('#createEvent').show();
	  $('#createAccount').hide();
	  $('#showEvent').hide();
	});

	$('#radioShow').click(function() {
	  $('#showEvent').show();
	  $('#createAccount').hide();
	  $('#createEvent').hide();
	});

});



// The function to show the autoselected items for the different event types
HTMLImports.whenReady(function(){
	// dropdown autoselect items for event types
	var eventType = ["Wedding", "Birthday", "Conferance talk", "Dinner", "Meeting", "Movie"]
	var inputLocal = document.querySelector('#input-local');
	inputLocal.source = eventType;
});

var createEventArray = [
	{
		evName: "",
		fullName: "",
		guests: [],
		eventName: "",
		eventHost; "",
		eventStart: "",
		eventEnd: "",
		eventAdress: "",
		eventInfo: ""

	}
];

// To fill the created event calender array with information
  // To ensure that elements are ready on polyfilled browsers,
  // wait for WebComponentsReady.
document.addEventListener('WebComponentsReady', function() {

	var createEvent = document.getElementById('createEventBtn');
	var ev = document.getElementById("event");
	var evName = document.getElementById("evName");
	var fullName = document.getElementById('fullName');
	var guests = document.getElementById('guestList');
	var eventName = document.getElementById('eventName');
	var eventType = document.getElementById('input-local');
	var eventHost = document.getElementById('hostName');
	var eventStart = document.getElementById('start');
	var eventEnd = document.getElementById('end');
	var eventAdress = document.getElementById('address');
	var eventInfo = document.getElementById('addInfo');
	createEvent.addEventListener('click', function() {
		evName.textContent = eventName.value;
		ev.textContent = name.value + " invited " + guests.value;
	});
});



 // Polymer({
 //    is: 'ls-sample',
 //    properties: {
 //      cartoon: {
 //        type: Object
 //      }
 //    },
 //    // initializes default if nothing has been stored
 //    initializeDefaultCartoon: function() {
 //      this.cartoon = {
 //        name: "Mickey",
 //        hasEars: true
 //      }
 //    },
 //    // use path set api to propagate changes to localstorage
 //    makeModifications: function() {
 //      this.set('cartoon.name', "Minions");
 //      this.set('cartoon.hasEars', false);
 //    }
 //  });