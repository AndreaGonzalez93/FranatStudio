// const selectGender=document.getElementById('gender-filter');
// selectGender.addEventListener('changer',()=>{
//     console.log('sad');
// });

let dataMovies;

const loadCards = () => {
    dataMovies=getData(movies.movies, 2, '', 'movies');
    console.log(dataMovies);
}

loadCards();

