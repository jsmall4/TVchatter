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


// Search function
const searchTVshows = async () => {
const searchbar = document.getElementById("prompt").value;
await fetch("https://api.themoviedb.org/3/search/tv?api_key=a5236f2eef292a6c9f917d6db44e1323&language=en-US&page=1&query=" + searchbar + "&include_adult=false")
.then((response) => response.json())
.then((data) => {
let tvshowID = data.results[0].id
window.location.href = `/tvshow/${tvshowID}`;
})
.catch((err) => console.log("Unexpected error. Please try again"));
};


// Post Comment function
const postComment = async function (event) {
event.preventDefault();
const content = document.getElementById("content").value

if (content) {
  await fetch(`/tvshow/${tvshowID}`, {
    method: 'POST',
    body: JSON.stringify({
      content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // document.location.reload();

  console.log(content)
}
}; 

document
  .getElementById('submitContent')
  .addEventListener('click', postComment);




// Initialising the function
GetShowInfo();
