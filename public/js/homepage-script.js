const api = "api_key=a5236f2eef292a6c9f917d6db44e1323";
const trendingTVsearch = "https://api.themoviedb.org/3/tv/popular?";
const region = "language=en-UK";
const onePage = "page=1";
const baseIMGurl = "https://image.tmdb.org/t/p/original";

// API Call to get the 8 most Trending TV shows data and apply it to image cells
const GetTrending = () => {
  fetch(trendingTVsearch + "&" + api + "&" + region + onePage)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.results[0].poster_path);
      console.log(baseIMGurl + data.results[0].poster_path);

      for (i = 0; 1 < 9; i++) {
        document.getElementById("img-c" + (i + 1)).src =
          baseIMGurl + data.results[i].poster_path;
        document
          .getElementById("img-c" + (i + 1))
          .setAttribute("data-img", data.results[i].id);
        let imagecell = document.getElementById("img-c" + (i + 1)).dataset.img;
        console.log(imagecell);
        document
          .getElementById("img-c" + (i + 1))
          .addEventListener("click", function () {
            window.location.href = `/tvshow/${imagecell}`;
          });
      }
    })
    .catch((err) => console.log("Unexpected error. Please try again"));
};

// Initialising the functions
GetTrending();
