const baseIMGurl = "https://image.tmdb.org/t/p/original";
const api = "api_key=a5236f2eef292a6c9f917d6db44e1323";
const searchTV = "https:api.themoviedb.org/3/tv/";
const region = "language=en-UK";

// Getting the TV Show ID from url
let tvshowID = window.location.href.split("/")[4];

// Declaring elements from html file
let title = document.getElementById("title");
let date = document.getElementById("date");
let desc = document.getElementById("desc");
let tagline = document.getElementById("tagline");
let genre = document.getElementById("genre");
let logo = document.getElementById("logo");
let poster = document.getElementById("poster");
let searchButton = document.getElementById("search-icon");
let searchField = document.getElementById("prompt");

// Populating template with tv show data
const GetShowInfo = () => {
  fetch(searchTV + tvshowID + "?" + api + "&" + region)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      title.innerHTML = data.name;
      date.innerHTML = "Last Air Date: " + data.last_air_date;
      desc.innerHTML = data.overview;
      tagline.innerHTML = data.tagline;
      genre.innerHTML = data.genres[0].name;
      logo.src = baseIMGurl + data.poster_path;
      poster.src = baseIMGurl + data.backdrop_path;
    })

    .catch((err) => console.log("Unexpected error. Please try again"));
};


//Search Function

searchButton.addEventListener("click", function () {

console.log("clicked");
console.log(prompt.value)

})



// Initialising the function
GetShowInfo();
