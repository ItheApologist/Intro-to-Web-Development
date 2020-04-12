var movies = [
    inBruges = {
        name: "In Bruges",
        rating: 5,
        haveSeen: true,
    },

    frozen = {
        name: "Frozen",
        rating: 4.5,
        haveSeen: false,
    },
    madMax = {
        name: "Mad Max Furry Road",
        rating: 5,
        haveSeen: true,
    },
    les = {
        name: "Les Miserables",
        rating: 3.5,
        haveSeen: false,
    },
]

function listMovies(arry){
    movies.forEach(function(movie, i) {
        if (movies[i].haveSeen === true) {
            console.log("You have watched " + movies[i].name + " - " + movies[i].rating + " stars")
        } else {
            console.log("You have not watched " + movies[i].name + " - " + movies[i].rating + " stars")
        }
    })
}