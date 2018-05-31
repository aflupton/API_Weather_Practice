import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Bike } from './../js/bike.js';

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
  $('#bikeForm').click(function(event) {
    event.preventDefault();

    // collect bike location data from user
    let city = $('#bikeCity').val();
    // let color = $('#bikeColor').val();
    let manufacturer = $('#bikeManufacturer').val();
    // let dateStolen = $('#dateStolen').val();

    $('#bikeCity').val("");
    // $("#bikeColor").val("");
    $("#bikeManufacture").val("");
    // $("#dateStolen").val("");

    // instantiate new xml request
    let request = new XMLHttpRequest();
    // store api url in a variable
    let url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=${manufacturer}&location=${city}&distance=10&stolenness=proximity&access_token=9a632caf2f26f6265cc787221c7f090a7617c0b775f496350591bfe41e04b340`;
    console.log(url);// log in console for debugging
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
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
      if (city != null) {
        $('#showHeader').text(`Showing bikes from ${city}:`)
      } else {
        $('#showHeader').text(`Showing all ${manufacturer} bikes:`)
      }

      for(let i=0; i<response.bikes.length; i++) {
        $('#bikeId').append(`<li>${response.bikes[i].id}</li>`);
        $('#bikeListing').append(`<li>${response.bikes[i].title}</li>`);
        $('#bikeSerial').append(`<li>${response.bikes[i].serial}</li>`);
        $('#bikeManufacturer').append(`<li>${response.bikes[i].manufacturer_name}</li>`);
        $('#bikeLocationStolen').append(`<li>${response.bikes[i].stolen_location}</li>`);
      }
    }
  });
  $('#refresh').click(function(event) {
    event.preventDefault();
    location.reload();
  });
});
