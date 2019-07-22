document.getElementById("btnKid").addEventListener("click", ()=>{
	document.getElementById("btnKid").style.display="none";
	document.getElementById("btnAdult").style.display="none";
	document.getElementById("moviesKids").style.display="block";
})
document.getElementById("btnAdult").addEventListener("click", ()=>{
	document.getElementById("btnKid").style.display="none";
	document.getElementById("btnAdult").style.display="none";
	document.getElementById("moviesKids").style.display="block";
})
