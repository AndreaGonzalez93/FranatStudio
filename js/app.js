
const showModal=(id)=>{
	console.log(getMovie(id));
};

const input = document.getElementById('search2');
input.addEventListener('keyup', () => {
    let name=input.value.toLowerCase();
    console.log(name);
    searchMovie(dataMovies, name, 'movies');
});

const selectGender = document.getElementById('gender-filter');
selectGender.addEventListener('change', () => {
    filterGender(dataMovies, selectGender.value);
});