$(document).ready(function() {
    // an IFFE function to isolate variables from the global scope, built on Matt Litzingers "how to build a password validator with js"
    (function() {
        var password = document.getElementById('password1');
        var createButton = document.getElementById('createBtn');

        var helperText = {
            charLength: document.querySelector('.helper-text .length'),
            lowercase: document.querySelector('.helper-text .lowercase'),
            uppercase: document.querySelector('.helper-text .uppercase'),
            special: document.querySelector('.helper-text .special')
        };

        var pattern = {
            charLength: function() {
                if (password.value.length > 8) {
                    return true;
                }
            },
            lowercase: function() {
                var regex = /^(?=.*[a-z]).+$/; // Lowercase character pattern

                if (regex.test(password.value)) {
                    return true;
                }
            },
            uppercase: function() {
                var regex = /^(?=.*[A-Z]).+$/; // Uppercase character pattern

                if (regex.test(password.value)) {
                    return true;
                }
            },
            special: function() {
                var regex = /^(?=.*[0-9_\W]).+$/; // Special character or number pattern

                if (regex.test(password.value)) {
                    return true;
                }
            }
        };

        // Listen for keyup action on password field
        password.addEventListener('keyup', function() {
            // Check that password is a minimum of 8 characters
            patternTest(pattern.charLength(), helperText.charLength);

            // Check that password contains a lowercase letter
            patternTest(pattern.lowercase(), helperText.lowercase);

            // Check that password contains an uppercase letter
            patternTest(pattern.uppercase(), helperText.uppercase);

            // Check that password contains a number or special character
            patternTest(pattern.special(), helperText.special);

            // Check that all requirements are fulfilled
            if (hasClass(helperText.charLength, 'valid') &&
                hasClass(helperText.lowercase, 'valid') &&
                hasClass(helperText.uppercase, 'valid') &&
                hasClass(helperText.special, 'valid')
            ) {
                createButton.setAttribute('active', true); //activates the createButton
                createButton.removeAttribute("disabled"); //activates the createButton by removing the disabled attribute

            } else {
                createButton.setAttribute('disabled', true); //disable the createButton
                createButton.removeAttribute("active");
            }
        });

        function patternTest(pattern, response) {
            if (pattern) {
                addClass(response, 'valid');
            } else {
                removeClass(response, 'valid');
            }
        }

        function addClass(el, className) {
            if (el.classList) {
                el.classList.add(className);
            } else {
                el.className += ' ' + className;
            }
        }

        function removeClass(el, className) {
            if (el.classList)
                el.classList.remove(className);
            else
                el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }

        function hasClass(el, className) {
            if (el.classList) {
                return el.classList.contains(className);
            } else {
                new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
            }
        }


    })();
});