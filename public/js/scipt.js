const api = "api_key=a5236f2eef292a6c9f917d6db44e1323";
const trendingTVsearch = "https://api.themoviedb.org/3/tv/popular?";
const region = "language=en-UK";
const onePage = "page=1";
const baseIMGurl = "https://image.tmdb.org/t/p/original";



// API Call to get most Trending TV shows data
const GetTrending = () => {
  fetch(trendingTVsearch + "&" + api + "&" + region + onePage)
    // fetch ('https://api.themoviedb.org/3/tv/popular?&api_key=a5236f2eef292a6c9f917d6db44e1323&language=en-UK')
    .then((response) => response.json())
    .then((data) => {
    //   console.log(data);
    //   console.log(data.results[0].poster_path);
    //   console.log(baseIMGurl + data.results[0].poster_path);
    //   document.getElementById("img-c1"). src = baseIMGurl + data.results[0].poster_path;
    for (i =0; 1 < 9; i++) {
        document.getElementById("img-c" + (i + 1)). src = baseIMGurl + data.results[i].poster_path;
        document.getElementById("img-c" + (i + 1)).setAttribute('data-img', data.results[i].id)

    }
    })

    .catch((err) => console.log("Unexpected error. Please try again"));
};

document.getElementById("img-c1").addEventListener("click", function(){ console.log(document.getElementById("img-c1").dataset.img)}); 


GetTrending();
