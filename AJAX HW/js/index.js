
console.log("Hello from the JavaScript console!");

$.ajax({
  type: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b',
  success: function(weather) {
    console.log("HERES YOUR WEATHER!")
    console.log(weather);
  },
  error() {
    console.error("An error occurred.");
  },
});

console.log("THE AJAX has been dispatched.")


