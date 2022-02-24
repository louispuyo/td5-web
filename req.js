function JsonParse() {


    var req = new XMLHttpRequest();


    req.open("GET", "http://geoffray.bonnin.free.fr/movie.php");
    req.send();



    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {

            var jsonData = JSON.parse(req.responseText);
            console.log(jsonData)
            processContent(jsonData);
        }
    }



}

JsonParse();



var moviesTable = document.getElementById("movies");

function processContent(jsonData) {

    for (var i = 0; i < jsonData.movies.length; i++) {
        var movies = document.createElement("tr");
        var movie = jsonData.movies[i];
        console.log(movie.name);

        var t = document.createElement("td");
        var t2 = document.createElement("td");
        var t3 = document.createElement("td");
        var image = document.createElement("img");
        image.setAttribute("src", movie.image);
        t2.textContent = movie.name;
        t3.textContent = movie.rating;
        t.appendChild(image);

        movies.appendChild(t);
        movies.appendChild(t2);
        movies.appendChild(t3);
        moviesTable.append(movies);


        // document.getElementById("t1").innerHTML = movie.name;
    }
}