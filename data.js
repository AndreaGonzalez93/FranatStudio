const movie= MOVIES.movies;
window.workApi={
  getApi: (id)=>{
    let api="";
    const url="http://www.omdbapi.com/?apikey=b3da5f50"
    api= url+"&i="+id;
    fetch(api)
    .then(function(response){
      return response.json();
    })
    .then(function(myJson) {
      let fatherDiv=document.getElementById("showHere");
      let div=document.createElement("div");
      div.className="carousel-item";
      let img=document.createElement("img");
      img.className="d-block w-100";
      img.src=myJson.Poster;
      fatherDiv.appendChild(div);
      div.appendChild(img);


      console.log(myJson);
  });
  },
  showMovies: ()=>{
    let arrMovies=[];
   
    for (let i = 0; i < movie.length; i++) {
      workApi.getApi(movie[i].id);


    }
  },
  postersBanners: (cali)=>{

    let poster=movie.filter((movies)=> movies.calification==cali);
    for (let i = 0; i < poster.length; i++) {
      workApi.getApi(poster[i].id);
    }
    
  }
}
workApi.postersBanners(1);