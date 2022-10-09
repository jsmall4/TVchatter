
const api = "api_key=a5236f2eef292a6c9f917d6db44e1323";
const trendingTVsearch = "https://api.themoviedb.org/3/tv/popular?";
const region = "language=en-UK"
const onePage = "page=1"
const baseIMGurl = "https://image.tmdb.org/t/p/original"

// API Call to get most Trending TV shows data
const GetTrending = () => {

    fetch(trendingTVsearch + '&' + api + '&' + region + onePage)
    // fetch ('https://api.themoviedb.org/3/tv/popular?&api_key=a5236f2eef292a6c9f917d6db44e1323&language=en-UK')
    .then(response => response.json())
    .then(data => {
console.log(data)

})

.catch(err => alert("Unexpected error. Please try again"))

}





GetTrending ()