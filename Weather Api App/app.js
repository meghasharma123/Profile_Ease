//Getting Current Location
navigator.geolocation.getCurrentPosition(success, fail);
let latitude, longitude;

function fail(err) {
    console.log(err)
}

function unix(unixcode) {
    unixcode = unixcode * 1000;


    const dateObject = new Date(unixcode)
    return dateObject.getDate() + '/' + dateObject.getMonth();
}

unix(1595954398)
function success(pos) {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + pos.coords.latitude + "&lon=" + pos.coords.longitude + "&units=metric&appid=43b1d805c096ba063f101e968f8049a4")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let url;
            switch (data.current.weather[0].main) {
                case "Haze":
                    url = "https://webdesignfacts.net/wp-content/uploads/2019/01/CSS-Background-Fireflies.gif"
                    break;
                case "Thunderstorm":
                    url = "https://i.pinimg.com/originals/a2/39/bd/a239bd1f21a92b32a4036155de07a189.gif"
                    break
                case "Drizzle":
                    url = "https://thumbs.gfycat.com/CompleteWideeyedFirecrest-size_restricted.gif"
                    break;
                case "Rain":
                    url = "https://33.media.tumblr.com/tumblr_lv6bvbfp6e1r1yutvo1_500.gif"
                    break;
                case "Clouds":
                    url = "https://thumbs.gfycat.com/HotRecklessIslandwhistler-size_restricted.gif"
                    break;
                default:
                    url = "https://wallpapersite.com/images/wallpapers/sunset-2560x1440-clear-sky-hd-5168.jpg"
                    break

            }
            $('body').css('background-image', 'url(' + url + ')')

            var loc = $('<div><div>').text("Timezone:" + data.timezone).addClass('my-1 bg-primary p-2 rounded');
            var lat = $('<div><div>').text("Latitude:" + data.lat).addClass('my-1 bg-primary p-2 rounded');
            var lon = $('<div><div>').text("Longitude:" + data.lon).addClass('my-1 bg-primary p-2 rounded');

            $('.loc').append(loc, lat, lon)
            var clouds = $('<div><div>').text("Cloud(%):" + data.current.clouds).addClass('my-1 bg-primary p-2 rounded');
            var humid = $('<div><div>').text("Humidity(%):" + data.current.humidity).addClass('my-1 bg-primary p-2 rounded');

            $('.others').append(clouds, humid)
            $('.vis').text(" - Visibility: " + data.current.visibility)
            $('.uvi').text(" - U/V Exposure: " + data.current.uvi)
            $('.pres').text(" - Pressure(p.a.): " + data.current.pressure)
            $('.wind').text(" - Wind deg: " + data.current.wind_deg)
            $('.speed').text(" - Wind Speed: " + data.current.wind_speed)
            $('.temp').html('<i class="fas fa-sun"style="font-size: 20px;"><span class="mx-4" style="font-size:15px;">Current: ' + data.current.temp + 'C - Feels Like: ' + data.current.feels_like + '</span> </i>')

            let arr = [];
            let headings = ['Day', 'High', 'Low'];
            arr.push(headings);

            for (var i = 0; i < data.daily.length; i++) {
                let temp = [];
                temp.push(unix(data.daily[i].dt));
                temp.push(data.daily[i].temp.max)
                temp.push(data.daily[i].temp.min)

                arr.push(temp)

            }



            google.charts.load('current', { 'packages': ['corechart'] });
            google.charts.setOnLoadCallback(drawChart);

            function drawChart() {
                var data = google.visualization.arrayToDataTable(arr);

                var options = {
                    title: 'Past week Temperatures',
                    curveType: 'function',
                    legend: { position: 'bottom' }
                };

                var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

                chart.draw(data, options);
            }





        })
        .catch((err) => { console.log(err) })
}





