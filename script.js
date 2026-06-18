import { fetchQuotes, fetchImages } from './data.js';

import 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';

let alreadyDisplayed = [];
let n = alreadyDisplayed.length;
let quote = '';
let isspeaking = false;
let bookmarked = [];
let index;
let isactive = false;
let stoicQuotes = ''
async function init() {

    stoicQuotes = await fetchQuotes();  // Array of 96 quotes


    ChooseIndex();

}
function ChooseIndex(){
    index = Math.floor(Math.random()*100);
    if ( stoicQuotes[index] &&!alreadyDisplayed.includes()){
        alreadyDisplayed.push(index);
        
        displayRand(index);

    }
    else{
        ChooseIndex();
    }
}

 async function displayRand(index){
    let myquote = stoicQuotes[index];
     let text = myquote.quote;
        let author = myquote.author
        let image = await fetchImages(author)
        let html = `
        <div>
                    <img class="auth_img" src="${image.thumbnail.source}">
                </div>
                <div class="written_cont">
                    <div class="author_name">${author}</div>
                    <hr>
                    <div class="quote_box">"${text}"</div>
                </div>
        `
        document.querySelector('.content').innerHTML = html;
}

function backpress(){
    n = alreadyDisplayed.length - 2;
    index = alreadyDisplayed[n]
    displayRand(index);
    n = --n;
}

function frontpress(){
    ChooseIndex();
}

document.querySelector('.left-scroll').addEventListener('click', () => {
    backpress();
})

document.querySelector('.right-scroll').addEventListener('click', () => {
    frontpress();
})

document.querySelector('.read_but').addEventListener('click', () => {
    if (quote.trim() !== "" && !isspeaking) {
        
      const utterance = new SpeechSynthesisUtterance(quote);
      speechSynthesis.speak(utterance);
      isspeaking = true;
      utterance.onend = () => {
         isspeaking = false;
      }
    }else{
        console.log('cancelled')
        isspeaking = false;
        speechSynthesis.cancel();
    }
    
})

document.querySelector('.share_but').addEventListener('click', () => {
    let contimg = document.querySelector('.imgPart');
    let toHide = document.querySelectorAll(".arrows, .body_util");
    toHide.forEach(ele => ele.style.display = "none");
    html2canvas(contimg).then(canvas => {
        let link = document.createElement('a');
        link.download = "div_image.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
        toHide.forEach(ele => ele.style.display = "");
    })
})

document.querySelector('.hamburger').addEventListener("click", () => {
    if (!isactive){
    document.querySelector('.hamburger').classList.add('isactive');
    isactive = true;
    document.querySelector('.drop_box').style.display = "flex";
    }
    else{
        document.querySelector('.hamburger').classList.remove('isactive');
    isactive = false;
    document.querySelector('.drop_box').style.display = "none";
    }
})

init()