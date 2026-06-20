import { fetchQuotes, fetchImages } from './data.js';

import 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';

let alreadyDisplayed = [];
let quote = '';
let isspeaking = false;
let index;
let currentIndex
let isactive = false;
let stoicQuotes = ''
let util_panel = document.querySelectorAll(".body_util")
let nBack = 1
let bookmarked = new Set()
async function init() {

    stoicQuotes = await fetchQuotes();  


    ChooseIndex();

}
function ChooseIndex(){
    index = Math.floor(Math.random()*100);
    if ( stoicQuotes[index] &&!alreadyDisplayed.includes(index)){
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
        currentIndex = index
        let html = `
        <div>
                <img class="auth_img" src="${image?.originalimage?.source || "images/fallback.svg"}" >
                </div>
                <div class="written_cont">
                    <div class="author_name">${author}</div>
                    <hr>
                    <div class="quote_box">"${text}"</div>
                </div>
                `
        document.querySelector('.content').innerHTML = html;
        document.querySelector(".body_util").innerHTML = `<div class="read_but util_panel icon "><i class="fa-solid fa-headphones fa-2x"></i></div>
        <div class="share_but util_panel icon "><i class="fa-solid fa-share-nodes fa-2x"></i></div>
        <div class="bookmark_but util_panel icon "><i class="${bookmarked.has(index)?"fa-solid":"fa-regular"} fa-bookmark fa-2x"></i></div>`
}

function backpress(){
    if(alreadyDisplayed.length - 1 - nBack >= 0){
    console.log (alreadyDisplayed)
    let n = alreadyDisplayed.length - 1 - nBack;
    console.log(alreadyDisplayed[n])
    displayRand(alreadyDisplayed[n]);
    nBack = nBack + 1
    }
    else{
        return
    }
}

function frontpress(){
    if (currentIndex == alreadyDisplayed[alreadyDisplayed.length - 1]){
        ChooseIndex();
    }
    else {
        nBack = nBack - 1
        let n = alreadyDisplayed.length - 1 - nBack;
        displayRand(alreadyDisplayed[n]);
        console.log (alreadyDisplayed)
        console.log(alreadyDisplayed[n])
    }
    
}

document.querySelector('.left-scroll').addEventListener('click', () => {
    backpress();
})

document.querySelector('.right-scroll').addEventListener('click', () => {
    frontpress();
})

util_panel.forEach((ele) => {ele.addEventListener("click", (e) => {
    let butclick = e.target.closest(".read_but")
    if(butclick){
        console.log("hello")
    if (document.querySelector('.content').querySelector(".quote_box").innerText.trim() !== "" && !isspeaking) {
      const utterance = new SpeechSynthesisUtterance(document.querySelector('.content').querySelector(".quote_box").innerText);
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
    
}
}
)
}
        )

util_panel.forEach((ele) => {ele.addEventListener("click", (e) => {
    let butclick = e.target.closest(".share_but")
    if(butclick){
        let contimg = document.querySelector('.imgPart');
        let toHide = document.querySelectorAll(".arrows, .body_util");
        toHide.forEach(ele => ele.style.display = "none");
     html2canvas(contimg, {
        useCORS: true,
        //allowTaint: true
        }).then(canvas => {
        let link = document.createElement('a');
        link.download = "div_image.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
        toHide.forEach(ele => ele.style.display = "");
        })
}
    }
        )
        }
    )

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


util_panel.forEach((ele) => {ele.addEventListener("click", (e) => {
    let butclick = e.target.closest(".bookmark_but")
    if (butclick){
        if(!bookmarked.has(currentIndex)){
            bookmarked.add(currentIndex)
        butclick.querySelector(".fa-bookmark").classList.add("fa-solid")
        butclick.querySelector(".fa-bookmark").classList.remove("fa-regular")
        return
        }
        bookmarked.delete(currentIndex)
        butclick.querySelector(".fa-bookmark").classList.add("fa-regular")
        butclick.querySelector(".fa-bookmark").classList.remove("fa-solid")
    }
    
})})