let btn=document.getElementById("fech");
btn.addEventListener("click", fetchjokes);



function fetchjokes(){
  document.getElementById("joke").innerHTML="Loading....";
fetch("https://sv443.net/jokeapi/v2/joke/Any")
.then(response=>response.json())
.then(data=>{
  if(data.joke)
  document.getElementById("joke").innerHTML=data.joke;
  else{
    document.getElementById("joke").innerHTML=data.delivery+" "+data.setup
  }
})

}