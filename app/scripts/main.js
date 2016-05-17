$(function() {
    $(window).load(function() {


        // show and hide different sections depending on user input
        // $('#newAccount').click(function() {
        //     $('#createAccount').show();
        //     $('#createEvent').hide();
        //     $('#showEvent').hide();
        //     $('#newAccount').attr('checked');

        //     //document.getElementById('firstName').setAttribute('focused', '');
        //     //$("paper-input:text:visible:first").focus();
        //      //$("#firstName").attr('focused');
        //      //document.getElementById("firstName").$.input.focus(); //the first input will be focused for faster start to input'
        //       $('paper-input input').first().focus();
        // });

        // $('#newEvent').click(function() {
        //     $('#createEvent').show();
        //     $('#createAccount').hide();
        //     $('#showEvent').show();
        //     $('#newEvent').attr('checked');
        //     //document.getElementById('eventName').$.input.focus();
        //     //$("input:text:visible:first").focus();
        //     $("#eventName").attr('focused');
        //     document.getElementById("eventName").focus(); //the first input will be focused for faster start to input
        // });


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

        //sets the end time to the start time when the start time has been entered
        $("#start").keyup(function() {
            var stt = document.getElementById('start').$.input.value;
            document.getElementById('end').$.input.value = stt;
            checkTime();
        });

                //sets the end time to the start time when the start time has been entered
        $("#end").keyup(function() {
            var stt = document.getElementById('start').$.input.value;
            //validates that the end time is after the start time
            var end = document.getElementById('end').$.input.value;
            if (stt > end) {
                checkTime();
            } else {
                $("#checkStartEndTime").text("");
            };
        });

        //adds an error message
        function checkTime() {
            $("#checkStartEndTime").text("Please, check your starting and end time.");
        };







        // to help fill out the adress field
        var adressField = document.getElementById('place');
        adressField.addEventListener('focus', initAutocomplete, geolocate);

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
                (document.getElementById('place').$.input), {
                    types: ['geocode']
                });

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
            console.log("geolocate");
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var geolocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude

                    };
                    console.log(geolocation);
                    var circle = new google.maps.Circle({
                        center: geolocation,
                        radius: position.coords.accuracy
                    });
                    autocomplete.setBounds(circle.getBounds());
                });
            }
        }


    });
});