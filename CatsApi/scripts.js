let generate_btn = document.querySelector(".generate_btn");

generate_btn.addEventListener("click", fetchPics);

function fetchPics(){
    let imagesDiv = document.querySelector(".imagesDiv")
    imagesDiv.innerHTML = ''

    fetch('https://api.thecatapi.com/v1/images/search').then(response => response.json())
    .then((data) => {
        let imgUrl = data[0].url

        let imgEl = document.createElement("img")
        imgEl.setAttribute('src',`${imgUrl}`)
        imgEl.classList.add("showcase")

        let imagesDiv = document.querySelector(".imagesDiv") 
        imagesDiv.appendChild(imgEl)
        
    })  
    .catch(err => console.log(err))
}