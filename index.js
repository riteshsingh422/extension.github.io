const getjokes = async () => {
	try{
		const res = await fetch("https://api.chucknorris.io/jokes/random");
		const data = await res.json();
		const myjoke = document.querySelector("#myjoke");
		myjoke.innerHTML = data.value;

	}catch(error) {}
};

window.addEventListener("load",()=>{


	getjokes();


});
