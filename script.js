import { fetchQuotes, fetchImages } from './data.js';

import 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';

let alreadyDisplayed = [];
let quote = '';
let isspeaking = false;
let index;
let currentIndex
let stoicQuotes = ''
let util_panel = document.querySelectorAll(".body_util")
let nBack = 1
let bookmarked = retrunBookmark()
let BookmarksOpend = false
let runBookmarks = []
function retrunBookmark(){
    let saved = localStorage.getItem("bookmarked")
    return saved ? new Set(JSON.parse(saved)) : new Set ()
}

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
    console.log(index)
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
if (!BookmarksOpend){
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
else {
    if (nBack > 0){
        nBack--
        displayRand(runBookmarks[nBack])
    }
    else {
        return
    }
}
}

function frontpress(){
if (!BookmarksOpend){
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
else {
    console.log(runBookmarks)
if (nBack < runBookmarks.length - 1){
    ++nBack
    console.log(runBookmarks[nBack])
    displayRand(runBookmarks[nBack])
}
else {
    nBack = 1
    console.log(runBookmarks[nBack])
    displayRand(runBookmarks[nBack])
}
    
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

document.querySelectorAll('.Heading').forEach((ele) => {
    ele.addEventListener("click", (e) => {
    let clcikedBut = e.target.closest(".hamburger")
    if (clcikedBut){
        document.querySelector('.drop_box').classList.toggle('active');
    }
})
})

document.addEventListener('click', (e) => {
    if (!e.target.closest('.hamburger')) {
        document.querySelector('.drop_box').classList.remove('active')
    }
})





init()


util_panel.forEach((ele) => {ele.addEventListener("click", (e) => {
    let butclick = e.target.closest(".bookmark_but")
    if (butclick){
        if(!bookmarked.has(currentIndex)){
            bookmarked.add(currentIndex)
        localStorage.setItem("bookmarked", JSON.stringify([...bookmarked]))
        if (BookmarksOpend){
            runBookmarks = [null, ...bookmarked]
        }
        butclick.querySelector(".fa-bookmark").classList.add("fa-solid")
        butclick.querySelector(".fa-bookmark").classList.remove("fa-regular")
        console.log(bookmarked)
        return
        }
        bookmarked.delete(currentIndex)
        localStorage.setItem("bookmarked", JSON.stringify([...bookmarked]))
        if (BookmarksOpend){
            runBookmarks = [null, ...bookmarked]
        }
        butclick.querySelector(".fa-bookmark").classList.add("fa-regular")
        butclick.querySelector(".fa-bookmark").classList.remove("fa-solid")
        console.log(bookmarked)
    }
    
})})

let clickBookmark = document.querySelector(".showBookmarks")
clickBookmark.addEventListener("click", () => {
    document.querySelector(".exitButt").classList.toggle("active")
    BookmarksOpend = true
    runBookmarks = [null, ...bookmarked]
    displayRand(runBookmarks[nBack])
}
    )

document.querySelector(".exitButt").addEventListener("click", ()=>{
    document.querySelector(".exitButt").classList.toggle("active")
    BookmarksOpend = false
    runBookmarks = []
    nBack = 1
    displayRand(alreadyDisplayed[alreadyDisplayed.length - 1])
})

document.querySelector("showAuth")