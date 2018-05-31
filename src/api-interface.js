import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
// import { Bike } from './../js/bike.js';

$(document).ready(function() {

  // $('#weatherForm').click(function(event) {
  //   event.preventDefault();
  //   let city = $('#location').val();
  //   $('#location').val("");
  //
  //   let request = new XMLHttpRequest();
  //   let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_KEY}`;
  //
  //   request.onreadystatechange = function() {
  //     if (this.readyState === 4 && this.status === 200) {
  //       let response = JSON.parse(this.responseText);
  //       getElements(response);
  //     }
  //   }
  //
  //   request.open("GET", url, true);
  //   request.send();
  //
  //   let getElements = function(response) {
  //     $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
  //     $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
  //     $('.showPressure').text(`The barometric pressure is ${response.main.pressure} millibars.`);
  //     $('.showWindSpeed').text(`The wind speed is ${response.wind.speed} mph.`);
  //   }
  // });
  $('#errors').hide();
  $('#resultsTable').hide();
  $('#bikeForm').click(function(event) {
    event.preventDefault();

    // collect bike location data from user
    let city = $('#bikeCity').val();
    let manufacturer = $('#bikeManufacturer').val();
    // let dateStolen = $('#dateStolen').val();

    $('#bikeCity').val("");
    $("#bikeManufacture").val("");
    // $("#dateStolen").val("");

    // instantiate new xml request
    let request = new XMLHttpRequest();
    // store api url in a variable
    let url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=50&manufacturer=${manufacturer}&location=${city}&distance=10&stolenness=proximity&access_token=${process.env.BIKE_KEY}`;
    // check request
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    // open a GET request
    request.open("GET", url, true);
    // send GET request
    request.send();
    // append results to html page
    let getElements = function(response) {
      // show header
      $('#showHeader').text(`Showing ${manufacturer} bikes from ${city}:`);
      $('#resultsTable').show();
      // return api data
      for(let i=0; i<response.bikes.length; i++) {
        let date = new Date(`${response.bikes[i].date_stolen}`*1000);
        $('#showBikes').append(`<tr><th>${response.bikes[i].id}</th><br><td>${response.bikes[i].title}</td><br><td>${response.bikes[i].serial}</td><br><td>${response.bikes[i].manufacturer_name}</td><br><td>${response.bikes[i].frame_colors}</td><br><td>${response.bikes[i].stolen_location}</td><br><td>${date}</td></tr>`);
      }
    }
  });
  // refresh button
  $('#refresh').click(function(event) {
    event.preventDefault();
    location.reload();
  });
});
