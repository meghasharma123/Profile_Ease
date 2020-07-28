
document.getElementById("fetchJoke").addEventListener("click", getJoke); 

	
	async function getJoke(a) { 
		document.querySelector(".showJoke").innerHTML = "Loading..."; 
		a.preventDefault(); 
		
		
		let url = "https://sv443.net/jokeapi/v2/joke/Any";
		fetch(url) 
			.then(response => response.json()) 
				.then(response => {
					let ResponseJoke; 
					if(response.joke) { 
						ResponseJoke = response.joke; 
					}
					else {
						ResponseJoke = `${response.setup} ${response.delivery}`;
					}
					
					document.querySelector(".showJoke").innerHTML = ResponseJoke;
				})
			}