window.workApi={
	getApi: (id)=>{
		let api="";
		const url="http://www.omdbapi.com/?apikey=b3da5f50"
		api= url+"&i=";+id;
		return api;
	}
}
