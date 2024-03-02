/*
const main = document.querySelector('main');

let htmlString = "";
*/

var data = require("/assets/jokesbase.json")
console.log(data);


async function printJSON() {
    const response = await fetch("/assets/jokebase.json");
    const json = await response.json();
    console.log(json);

    return (json);
}

/*
for (let i=0; i<15; i++){
    htmlString += `<div class="card mb-4"> <div class="card-body"> <h2 class="card-title">כותרת בדיחה1</h2> <h5 class="ratingc"> <IMG SRC="assets/scale.png" alt="scale" width="130" height="30"> &emsp;&emsp; <IMG SRC="assets/like.png" alt="like" width="20" height="20"> ${i} <IMG SRC="assets/dislike.png" alt="dislike" width="20" height="20"> </h2> </div> </div>`
}
main.innerHTML = htmlString;
*/