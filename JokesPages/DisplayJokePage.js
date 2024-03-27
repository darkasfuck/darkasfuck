let jid = 0;
const main = document.querySelector('main');

let Ljokes = [];
fetch('https://raw.githubusercontent.com/darkasfuck/darkasfuck.github.io/main/assets/jokesbase.json')
    .then((value)=> {return value.json()})
    .then(
        (value) =>{
            Ljokes = value
            main.innerHTML = showstuff();
        })



function showstuff(){
    htmlString = `<h2 class="fw-normal">${Ljokes[jid].title}</h2> <p class="lead mb-0">${Ljokes[jid].body}</p>`
    return htmlString;
}



