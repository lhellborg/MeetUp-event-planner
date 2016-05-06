console.log('\'Allo \'Allo!');

$(document).ready(function() {

	// show and hide different sections depending on user input
	$('#newAccount').click(function() {
	  $('#createAccount').show();
	  $('#createEvent').show();
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


	// The function to show the autoselected items for the different event types
	HTMLImports.whenReady(function(){
		// dropdown autoselect items for event types
		var eventType = ["Wedding", "Birthday", "Conferance talk", "Dinner", "Meeting", "Movie"]
		var inputLocal = document.querySelector('#input-local');
		inputLocal.source = eventType;
	});

	// an event array to save the different events
	var createEventArray = [
		{
			evName: "",
			firstName: "",
			lastName: "",
			guests: [],
			eventName: "",
			eventHost: "",
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
		var firstName = document.getElementById('firstName');
		var lastName = document.getElementById('lastName');
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

	// a polymer script for localstorage
	Polymer({
	  is: 'create-account',
	  properties: {
	    account: {
	      type: Object,
	      notify: true
	    }
	  },
	  // initializes default if nothing has been stored
	  initializeAccount: function() {
	      this.account = {
	        firstName: "",
	        lastName: "",
	        password: "",
	        email: "",
	        jobTitle: "",
	        birthday: ""
	      }
	  },
	  // when the account is loaded
	 accountLoaded: function() {
	    console.log('Account loaded; value: '+ this.account.firstName + " " + this.account.hasEars);
	    if (this.$.locStore.value.firstName === "") {
	    	document.getElementById("accountName").innerHTML = "Mate";
	    } else {
	    	document.getElementById("accountName").innerHTML = this.$.locStore.value.firstName;
	    }
	},

	// when the create account button is clicked all the required fields should be filled in and
	//the user input is saved in an array
	createAccountBtn: function() {
		var valid = validateForm();
		if (valid) {
	    	this.$.storageValue.innerHTML = "Welcome " + this.$.locStore.value.firstName;
	    } else {
	    	this.$.storageValue.innerHTML = "Please check that you filled in all required fields";
	    }
	}


	});

	function validateForm() {
	  var isValid = true;
	  $('.accountRequired').each(function() {
	    if ( $(this).val() === '' )
	        isValid = false;
	  });
	  return isValid;
	};

});