var APIkey = "&appid=89ab68d802734100c0a141408f0b53f2";
var searchTerm = "Adelaide";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchTerm + APIkey
var queryURLUVI = "http://api.openweathermap.org/data/2.5/uvi?q=" + searchTerm + "&lat=37.75&lon=-122.37" + APIkey
var queryURLForecast = "http://api.openweathermap.org/data/2.5/forecast?q=" + searchTerm + APIkey

//convert date format found in queryURLUVI and add it next to the search term
//do i create variables like below to get the values for lat and lon and input them in var queryURLUVI ??
// var lat = "&lat=" + response2.lat
// var lon = "&lon=" + response2.lon

//install moment to change date value to DDMMYYY???

//on click event code below
// $("#searchButton").on("click", function () {

//     event.preventDefault();
//     searchTerm = $("#searchTerm").val();

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        $(".city").html("<h1>" + response.name + "</h1>");
        // Convert the temp to celsius
        var tempC = (response.main.temp - 273.15)
        console.log(tempC)
        // add temp content to html
        $(".tempC").text("Temperature (C): " + tempC.toFixed(1) + " degrees");
        $(".humidity").text("Humidity: " + response.main.humidity + "%");
        $(".windSpeed").text("Wind Speed: " + response.wind.speed + " MPH");
    });


    $.ajax({
        url: queryURLUVI,
        method: "GET"
    }).then(function (response2) {
        console.log(response2);
        console.log(response2.lat)
        console.log(response2.lon)
        $(".UVI").text("UV Index: ")
    });


    $.ajax({
        url: queryURLForecast,
        method: "GET"
    }).then(function (response3) {
        console.log(response3);
    });







