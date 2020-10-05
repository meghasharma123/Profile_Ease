
fetch('https://sv443.net/jokeapi/v2/joke/Any')
    .then((res) => res.json())
    .then(data => {
        console.log(data)
        $('.help').text("Category of Jokes: " + data.category)

        if (data.type === "single") {
            document.querySelector('.setup').innerHTML = data.joke
            document.getElementById('reveal').style.display = "none"
            $('.setup').fadeIn()
        }
        else {
            document.querySelector('.setup').innerHTML = data.setup
            document.querySelector('.delivery').innerHTML = data.delivery
            document.querySelector('.delivery').style.display = "none"
            document.getElementById('reveal').style.display = "block"
            $('.setup').fadeIn()


        }
    })

document.getElementById('reveal').addEventListener('click', () => {
    $('.delivery').fadeIn();
    $('#reveal').fadeOut();

})

document.getElementById('btn').addEventListener('click', () => {
    $('#reveal').fadeOut();
    $('.delivery').fadeOut();
    $('.setup').fadeOut();

    fetch('https://sv443.net/jokeapi/v2/joke/Any')
        .then((res) => res.json())
        .then(data => {
            console.log(data)
            if (data.type === "single") {
                document.querySelector('.setup').innerHTML = data.joke
                document.getElementById('reveal').style.display = "none"
                $('.setup').fadeIn()
            }
            else {
                document.querySelector('.setup').innerHTML = data.setup
                document.querySelector('.delivery').innerHTML = data.delivery
                document.querySelector('.delivery').style.display = "none"
                document.getElementById('reveal').style.display = "block"
                $('.setup').fadeIn()


            }
        })


})