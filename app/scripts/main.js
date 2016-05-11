
$(function(){
   $(window).load(function(){

	// show and hide different sections depending on user input
	$('#newAccount').click(function() {
	  $('#createAccount').show();
	  $('#createEvent').hide();
	  $('#showEvent').hide();
	  $('#newAccount').attr('checked');
	});

	$('#newEvent').click(function() {
	  $('#createEvent').show();
	  $('#createAccount').hide();
	  $('#showEvent').show();
	  $('#newEvent').attr('checked');

	});


// when the "show all event" button is clicked all the events should show up
	$("#showEventBtn").click(function() {
		showEventFunction();
	});

// when the "show all event" button is clicked all the events should show up
	$("#showLastEventBtn").click(function() {
		showLastEvent();
	});


	//when an event name is clicked the details of the event will show up
	$("#events").on('click', '.event-entry', function() {
		$(this).toggleClass("open");
	});



	// The function to show the autoselected items for the different event types
	HTMLImports.whenReady(function(){
		// dropdown autoselect items for event types
		var eventType = ["Wedding", "Birthday", "Conferance talk", "Dinner", "Meeting", "Movie", "Funeral", "Coffe and Cake", "Brunch", "Get together", "Lunch", "Business", "Party", "Other"]
		var inputLocal = document.querySelector('#input-local');
		inputLocal.source = eventType;
	});


	// to help fill out the adress field
	var adressField = document.getElementById('place')
	adressField.addEventListener('focus', initAutocomplete, geolocate)

	// This example displays an address form, using the autocomplete feature
	// of the Google Places API to help users fill in the information.
	// https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform
	var placeSearch, autocomplete;
	var componentForm = {
	  street_number: 'short_name',
	  route: 'long_name',
	  locality: 'long_name',
	  administrative_area_level_1: 'short_name',
	  country: 'long_name',
	  postal_code: 'short_name'
	};
	var fullAddress = {};

	function initAutocomplete() {
	  // Create the autocomplete object, restricting the search to geographical
	  // location types.
	  autocomplete = new google.maps.places.Autocomplete(
	      (document.getElementById('place').$.input),
	      {types: ['geocode']});

	  // When the user selects an address from the dropdown, populate the address
	  // fields in the form.
	  autocomplete.addListener('place_changed', fillInAddress);
	}

	function fillInAddress() {
	  // Get the place details from the autocomplete object.
	  var place = autocomplete.getPlace();

	  // Get each component of the address from the place details
	  // and fill the corresponding field on the form.
	  for (var i = 0; i < place.address_components.length; i++) {
	    var addressType = place.address_components[i].types[0];

	    if (componentForm[addressType]) {
	      var val = place.address_components[i][componentForm[addressType]];
		    fullAddress[addressType] = val;
	    }
	  }
	}

	// Bias the autocomplete object to the user's geographical location,
	// as supplied by the browser's 'navigator.geolocation' object.
	function geolocate() {
		console.log("geolocate")
	  if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(function(position) {
	      var geolocation = {
	        lat: position.coords.latitude,
	        lng: position.coords.longitude

	      };
	      console.log(geolocation)
	      var circle = new google.maps.Circle({
	        center: geolocation,
	        radius: position.coords.accuracy
	      });
	      autocomplete.setBounds(circle.getBounds());
	    });
	  }
	};


   });
});