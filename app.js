let showMovies = (arr) => {
  arr.forEach(element => {
    let link = window.logic.createLink(element.id)
    fetch(link)
    .then((response) => {
      return response.json();
      console.log(link);
    })