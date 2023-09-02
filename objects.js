const movie1 = {
    title : "Barbie",
    releaseYear : "2023",
    rating : "PG-13",
    numCopies : 3
}

const movie2 = {
    title : "Slasher-7",
    releaseYear : "2023",
    rating : "R",
    numCopies : 10
}

console.log(movie2)

let summary2 = `${movie2.title} was released in ${movie2.releaseYear} and has a ${movie2.rating} rating. We have ${movie2.numCopies} copies.`
console.log(summary2);

console.log(movie1);

let summary1 = `${movie1.title} was released in ${movie1.releaseYear} and has a ${movie1.rating} rating. We have ${movie1.numCopies} copies.`
console.log(summary1);

let inventory = [movie1, movie2];

function rentMovie(title) {
  for (let movie of inventory) {
    if (movie.title.toLowerCase() == title.toLowerCase()) {
        if (movie.numCopies > 0) {
          movie.numCopies--;
          console.log("Here is your movie!")
          return;
        }
        console.log("Sorry all copies are rented currently.");
        return;
    }
  }
  console.log("Sorry we don't have that movie.");
}

rentMovie("Slasher-7");
rentMovie("Barbie");
rentMovie("Barbie");
rentMovie("Barbie");
rentMovie("Barbie");
rentMovie("The Lion King")