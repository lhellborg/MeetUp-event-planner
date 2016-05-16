# Meet-Up Event Planner

A responsive and user friendly app where you can **create an account**, **create an event** and **show saved events**. 

It uses bootstrap, jquery and polymer packages. LocalStorage is used to save the input data. It is build from yeoman web apps template using gulp.

##Create account
The form requires a first name, last name, a password and an email adress. The password requires at least 9 characters, upper and lowercase letters and at least one special character before allowed to move on by enabling the create account button. The password should be confirmed by typing it in one more time.When the required fields are left empty they will show an error message and red line is apperent.
There are two optional fields, job-title and birthday. THe birthday is of type date which enables a calender to be shown when focused.

When the create account button is clicked all the required fields are checked for input and if not a message appear asking the user to check all the inputs. If all required infromation is there a welcome message appear and the form to fill in a new event is shown. The next time the event planner is opened it will automatically show the create new event form and a greeting message saying "Hi" `your name`. 

##Create event
The form requires an event name, en event type, host name, address, start and end date and guests. There is also an optional field for additional information to the guests.

####Event type
The event type is a datalist which allows you to choose from the list or create your own events.
####Host name
The host name is prefilled from your created account first and last name, but can be changed to any name.
####Address
The address field is autofilled from google maps API for autocomplete-addressform.
####Start and End date
The start and end date is chosen from a calender. When the start time has been entered it automtically fills the end time with the same value. 
####Invited guests
The guest list can be filled out with any name although there are some predefined friends. To add all the guests to the event they need to be added one at a time by clicking on the `ADD GUEST` button.
####Create event
By clicking on the `CREATE EVENT` button all the required fields are checked for input information and that the start time is before the end time. If valid there will be a message saying that the event has been created and the event will be stored in localStorage and shown below the event form. The form will be reset and ready to use again.

If not all the fields are correct there will a message urging the user to check hte input fields and depending on the error, there will be some red text appearing in the form helping the user figure out what is wrong.

##Show events
The events can be shown either jsut the last one iwth all teh information or all of them with their eventnames, that when clicked will show all the information about that event.


## How to download and build
From the `app` code:
- download `package.json`, `gulpfile.babel.js`, `bower.json` and the `app` folder and put in a _directory_ of your choice on your computer
- direct yourself to _the directory_ that you choosed in the terminal and run `npm install`. This will create a file `node-modules` and `bower_components`in your directory with the files you need to run `gulp`.
- run `gulp`, which will _minify_ all of the **css and js** files and put them in a directory called `dist` in the correct folders. It will also copy all the other files to their correct destinations.
- run `gulp serve` to run from the `app` directory or `gulp serve:dist` to run from the compressed and minified dist directory. This will run the Event Planner on localhost port 9000. 






