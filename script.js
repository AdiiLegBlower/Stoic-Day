import { stoicQuotes } from "./data.js";
import 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';


let alreadyDisplayed = [];
let n = alreadyDisplayed.length;
let quote = '';
let isspeaking = false;
let bookmarked = [];
let index;

function ChooseIndex(){
    index = Math.floor(Math.random()*100);
    console.log(index);
    if ( stoicQuotes[index] &&!alreadyDisplayed.includes()){
        alreadyDisplayed.push(index);
        
        displayRand(index);

    }
    else{
        ChooseIndex();
    }
}

function displayRand(index){
    let myquote = stoicQuotes[index];
     quote = myquote.quote;
        let author = myquote.author
        let html = `
        <div>
                    <img class="auth_img" src="images/${author}.webp">
                </div>
                <div class="written_cont">
                    <div class="author_name">${author}</div>
                    <hr>
                    <div class="quote_box">"${quote}"</div>
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
    let contimg = document.querySelector('.content');

    html2canvas(contimg).then(canvas => {
        
    })
})

ChooseIndex();