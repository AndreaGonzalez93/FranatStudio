// window.workApi={
// 	getApi: (id)=>{
// 		let api="";
// 		const url="http://www.omdbapi.com/?apikey=b3da5f50"
// 		api= url+"&i=";+id;
// 		return api;
// 	}
// }

const apiUrl='http://www.omdbapi.com/?apikey=';
const apiKey='3f3e1606';

const getData=(data, clasification, category)=>{
	let infoMovies=[];
	//foteach es mi nuevo i ya no agregar incremento y variable
	data.forEach(element => {
		//revisa si la pelicula debe consultarse o no (para evitar que se muestren las no clasificadas )
		if(element.calification==clasification && element.category==category){
		fetch(`${apiUrl}${apiKey}&i=${element.id}`)
		.then(function(response){
			return response.json();
		})
		//en info guardo la data
		.then((info)=> {
			//en info movies guardo las peliculas buscadas
			infoMovies.push(info);
			//generando tarjetas
			let moviesSection=document.getElementById('movies');
			moviesSection.innerHTML+=`<div class="card" n="${element.id}" style="background-image: url(${info.Poster};)" onclick="showModal('${element.id}')" data-toggle="modal" data-target="#exampleModalScrollable"></div>`;
			return;
		})
		.catch((error)=> {
			console.log(`error: ${error}`);
		});
	}
	});
	dataMovies=infoMovies;
	return infoMovies;
}
window.getData=getData;

const getMovie=(id)=>{
	fetch(`${apiUrl}${apiKey}&i=${id}`)
	.then(function(response){
		return response.json();
	})
	.then((info)=> {
		console.log(info);
		let modalTitle=document.getElementById('modal-title');
		modalTitle.innerHTML=info.Title;

		let modalInfo=document.getElementById('modal-info');
		modalInfo.innerHTML=`<img src="${info.Poster}" alt="" class="img-modal"><p>Año: ${info.Year}</p><p>Fecha estreno: ${info.Released}</p><p>Duración: ${info.Runtime}</p>`;
		return info;
	})
	.catch((error)=> {
		console.log(`error: ${error}`);
	});
}
window.getMovie=getMovie;

const searchMovie=(data,name)=>{
	let moviesSection=document.getElementById('movies');
	moviesSection.innerHTML='';
	for(let movie of data){
		let nombre=movie.Title.toLowerCase();
		if(nombre.indexOf(name) !== -1){
			console.log(movie);
			moviesSection.innerHTML+=`<div class="card" n="${movie.id}" style="background-image: url(${movie.Poster};)" onclick="showModal('${movie.imdbID}')" data-toggle="modal" data-target="#exampleModalScrollable"></div>`;
		}
	}
}
window.searchMovie=searchMovie;

const filterGender = (data,gender) => {
	let filterData = [];
	let moviesSection=document.getElementById('movies');
	moviesSection.innerHTML='';
	for (let i = 0; i < data.length; i++) {
		console.log(data[i]);
		let generos=data[i].Genre.toLowerCase();
	  if (generos.indexOf(gender.toLowerCase()) !== -1) {
		  console.log(data[i]);
		moviesSection.innerHTML+=`<div class="card" n="${data[i].id}" style="background-image: url(${data[i].Poster};)" onclick="showModal('${data[i].imdbID}')" data-toggle="modal" data-target="#exampleModalScrollable"></div>`;
	  }
	}
	return filterData;
  };
window.filterGender = filterGender;