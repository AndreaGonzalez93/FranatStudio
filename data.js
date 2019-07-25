const movie= MOVIES.movies;
window.workApi={
  getApi: (id,selection)=>{
    let api="";
    const url="http://www.omdbapi.com/?apikey=b3da5f50"
    api= url+"&i="+id;
    fetch(api)
    .then(function(response){
      return response.json();
    })
    .then(function(myJson) {
      if (selection=="Calification") {
        workApi.showBanners(myJson); 
      }
      if (selection=="Categories") {
        workApi.showMovies(myJson);
      } 
  });
  },
  arrByCalification: (cali)=>{
    let poster=movie.filter((movies)=> movies.calification==cali);
    for (let i = 0; i < poster.length; i++) {
      workApi.getApi(poster[i].id,"Calification");
    }
  },
  arrByCategories: (cate)=>{
    let poster=movie.filter((movies)=> movies.category==cate);
    for (let i = 0; i < poster.length; i++) {
      workApi.getApi(poster[i].id,"Categories");
    }
  },
  showBanners:(myJson)=>{
    let fatherDiv=document.getElementById("showHere");
    let div=document.createElement("div");
    div.className="carousel-item";
    let img=document.createElement("img");
    img.className="d-block w-100";
    img.src=myJson.Poster;
    fatherDiv.appendChild(div);
    div.appendChild(img);
  },
  showMovies:(myJson)=>{
    let fatherDiv=document.getElementById("results");
    let div=document.createElement("div");
    div.className="col text-center";
    let img=document.createElement("img");
    let p=document.createElement("p");
    p.innerHTML=myJson.Title;
    img.src=myJson.Poster;

    div.appendChild(img);
    div.appendChild(p);
    fatherDiv.appendChild(div);
    
  }
}

workApi.arrByCalification(2);

workApi.arrByCategories("fantasy");
workApi.arrByCategories("adventure");
workApi.arrByCategories("drama");
workApi.arrByCategories("romance");
workApi.arrByCategories("accion");
workApi.arrByCategories("horror");