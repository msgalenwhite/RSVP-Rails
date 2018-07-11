![Build Status](https://codeship.com/projects/1602c260-6420-0136-f3cd-761b5b8f694f/status?branch=master)

### RSVP Site - Rails

An app to allow guests to submit RSVPs online rather than mailing in traditional RSVP cards.  Also contains information about the wedding itself, so that guest can remain up to date.

### Initialize the database
This project uses a postgresql database.

Before viewing the project on localhost, make sure you:

Create a database (rake db:create)
Load the schema (rake db:schema:load)

### View at localhost:3000
Install Ruby gems with 'bundle install'
Install NPM packages with 'npm install' or 'yarn install'
Start a rails server with 'rails s'
Start a javascript server with 'npm start'
Navigate to localhost/3000
Run test suite
Rspec tests can be run with 'rspec'
Jasmine-enzyme tests can be run with 'npm test'

### Required Files

Add a '.env' file that contains:

WEDDING_PASSWORD
GALEN_EMAIL
CHRIS_EMAIL

Of course, you can change the variable names to your own, but don't forget to change the code references.

### Next Step:

Add which RSVPs have a reserved room available, and remind them to call the Hotel.  Include it in the summary email so we know what is happening.  Also, include in the RSVP email.
