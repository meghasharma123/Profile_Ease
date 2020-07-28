let btn=document.getElementById("fech");
btn.addEventListener("click", fetchfacts);



function fetchfacts(){
fetch("https://catfact.ninja/fact?max_length=140")
.then(response=>response.json())
.then(data=>{
  document.getElementById("fact").innerHTML=data.fact;
})

}