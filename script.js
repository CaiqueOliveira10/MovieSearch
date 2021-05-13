var SearchControl = document.getElementById('SBox');
var ColorChange = document.getElementById('color');

function searchbox(num) {
  if(num == "1"){
    SearchControl.style.visibility = "visible";
    SearchControl.style.opacity = "1";
  } else if(num == "0") {
    SearchControl.style.visibility = "hidden";
    SearchControl.style.opacity = "0";
    }
    
    const searchTerm = search.value;
    if(searchTerm) {
        getMovies(searchURL+'&query='+searchTerm)
        
    }else{
        getMovies(API_URL);
    

}
  }

  //TMDB 

  const API_KEY = 'api_key=b36415c241699513b09faca64b3369f1';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const searchURL = BASE_URL + '/search/movie?'+API_KEY;




const main = document.getElementById('main');
const form =  document.getElementById('form');
const search = document.getElementById('search');
const tagsEl = document.getElementById('tags');

getMovies(API_URL);

function getMovies(url) {

    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        if(data.results.length !== 0){
            showMovies(data.results);
        }else{
            main.innerHTML= `<h1 class="no-results">No Results Found</h1>`
        }
       
    })

}

function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
             <img src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}">

            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>

            <div class="overview">

                <h3>Overview</h3>
                ${overview}
            </div>
        
        `

        main.appendChild(movieEl);
    })
}

function getColor(vote) {
    if(vote>= 8){
        return 'green'
    }else if(vote >= 5){
        return "orange"
    }else{
        return 'red'
    }
}








