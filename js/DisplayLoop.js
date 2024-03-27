const main = document.querySelector('main');

let Ljokes = [];
fetch('https://raw.githubusercontent.com/darkasfuck/darkasfuck.github.io/main/assets/jokesbase.json')
    .then((value)=> {
        return value.json()
    })
    .then(
        (value) =>{
            Ljokes = value
            //console.log(Ljokes[0].title)
            main.innerHTML = showstuff();
        })



function showstuff(){
    let htmlString = "";
    for (let i=0; i<15; i++){
        htmlString += `<a href="darkasfuck/jokesPages/${i}.html" style="color: #000000; text-decoration: none;" class="card mb-4"> <div class="card-body"> <h2 class="card-title">${Ljokes[i].title}</h2> <h5 class="ratingc"> <IMG SRC="assets/scale.png" alt="scale" width="130" height="30"> &emsp;&emsp; <IMG SRC="assets/like.png" alt="like" width="20" height="20"> ${Ljokes[i].ranking} <IMG SRC="assets/dislike.png" alt="dislike" width="20" height="20"> </h2> </div> </div>`
    }
    return htmlString;
}



