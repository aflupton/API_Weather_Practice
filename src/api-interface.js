import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  // $('#weatherForm').click(function() {
  //   let city = $('#location').val();
  //   $('#location').val("");
  //
  //   let request = new XMLHttpRequest();
  //   let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OTHER_KEY}`;
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
  $('#bikeForm').click(function() {
    let bikeCity = $('#bikeCity').val();
    $('#bikeCity').val("");

    let bikeRequest = new XMLHttpRequest();
    let bikeUrl = `https://bikeindex.org:443/api/v3/search?page=1&per_page=10&location=${bikeCity}&distance=10&stolenness=stolen&access_token=${process.env.BIKE_KEY}`;

    bikeRequest.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    bikeRequest.open("GET", bikeUrl, true);
    bikeRequest.send();

    let getElements = function(response) {
      $('.showBikes').text(`Showing bikes: ${response.bikes.title}.`);
    }
  });
});
