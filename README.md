# API_practice
#### _API Practice App, 5/31/18_
#### _By Andrew Lupton_

## Setup
1. Clone this repository (API_practice) from Github.
2. Go to https://bikeindex.org/documentation/api_v3 and create a unique API Key.
3. Once you have obtained your API key, open the project directory in Atom.
4. Create a .env file in the root directory with BIKE_KEY=`API Key here`.
5. Type `npm install` in the terminal and wait for webpack to install.
6. Type `npm run start` in the terminal and wait for the application to launch.
  * If your API request is not successful and you receive an "Origin is not allowed by Access-Control-Allow-Origin" error in your console, try installing the Allow-Control-Allow-Origin: * Chrome extension.
  * Once installed repeat step 6

## Specifications
1. The program takes a location input from the user.
2. The program takes a manufacturer input from the user.
3. The program returns a table of the 50 most recent bikes stolen that match the user's criteria.
4. If the API request is unsuccessful, the program returns an error message.

## Known Bugs

_None to date_

## Support and contact details

If you have any questions, email Andrew at mailto:aflupton@gmail.com

## Technologies Used

  * _Javascript_
  * _Karma_
  * _Jasmine_
  * _Babel_
  * _jQuery_
  * _HTML5_
  * _CSS3_

### License
* Published under the MIT License.

Copyright (c) 2018 **_Andrew Lupton_**
