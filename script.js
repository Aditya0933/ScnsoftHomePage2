// Navigation Section
let navIcon = document.querySelector(".nav-pop-up-icon")
let navSection = document.querySelector(".nav-pop-up-section")
let totalIcon = navIcon.children
let totalSection = navSection.children
let timesButton = document.querySelectorAll(".times-icon-i")
let angleuUp = document.querySelectorAll(".arrow-angle-up")
for(let i=0; i<totalIcon.length; i++){
    totalIcon[i].addEventListener('click',(e) => {
        for(let j=0;j<totalSection.length;j++){
            totalSection[j].style.display = 'none'
            angleuUp[j].style.transform = "rotate(0deg)";
        }
        totalSection[i].style.display = 'block'
        angleuUp[i].style.transform = "rotate(180deg)";
    })
}
for(let b=0; b<timesButton.length; b++){
    timesButton[b].addEventListener('click',()=>{
        totalSection[b].style.display = 'none' 
        angleuUp[b].style.transform = "rotate(0deg)";               
    })
    
}



// For Dash Icon of Navigation Bar Media Querry 

let navDash = document.querySelector('.nav-dash')

function navDashFun(){
    console.log("Yes Executed..!!!")
    document.querySelector('.nav-right-side-icon').style.display = "none"
    document.querySelector('.nav-content-2-inner').style.right = "0px"

    
}
function navXmarkFun(){
    console.log("Yes Doneeeeeee..!!!")
    document.querySelector('.nav-right-side-icon').style.display = "flex"
    document.querySelector('.nav-content-2-inner').style.right = "-300px"
}










// Main Company Logo
var copy = document.querySelector(".main-company-logo").cloneNode(true)
var hey = document.querySelector('.main-div-img-container').appendChild(copy)

// parent element
const parent_sec = document.querySelector('.explore-heading');
const containerRight = document.querySelector('.container-right');

// array of children element
const children_arr = parent_sec.children;

for (let i = 0; i < children_arr.length; i++) {
    children_arr[i].addEventListener('click', (e) => {
        removeHeading()
        e.target.classList.add('over-heading');
        console.log(e);
        console.log(e.target);
        console.log(e.target.id);
        console.log(e.target.id.innerText);
        console.log("Hii")
        const check = document.querySelector('.' + e.target.id + "-content");
        check.classList.add('software-active')
    })
}

function removeHeading() {
    for (let i = 0; i < children_arr.length; i++) {
        children_arr[i].classList.remove('over-heading');
        containerRight.children[i].classList.remove('software-active')
    }
}

// Main Company Logo => Our Offering Section
//  Media Querry At = 480px
var expoDash = document.querySelector('.explore-bottom-dash-section')
var expoDashChild = expoDash.children
console.log(expoDashChild)
for(let i =0;i<expoDashChild;i++){
    console.log("fgyuhj")
}











// Tech trends Section
const TechIcon = document.querySelector(".trends-icon")
const TechbBottom = document.querySelector(".trends-bottom")
const TechIconChild = TechIcon.children
const TechbBottomChild = TechbBottom.children

for (let i = 0; i<TechIconChild.length;i++){
    TechIconChild[i].addEventListener('click', ()=>{
    TechBottomBlock()
    TechbBottomChild[i].classList.add('disblock-1')
    })
}

function TechBottomBlock(){
    for (let i=0; i<TechbBottomChild.length; i++){
        TechbBottomChild[i].classList.remove('disblock-1') 
        TechbBottomChild[0].classList.add('disnone-1')
    }
}
// Media Querry Max-Width:764

var dash = document.querySelector('.bottom-dash-section')
var med764 = document.querySelectorAll(".med-764")
var dashChild = dash.children
console.log(med764.length)
for(let i=0; i<med764.length; i++){
    console.log("Yes Execute ")
}

// console.log(dash.children)

for (let i = 0; i<dashChild.length;i++){
    dashChild[i].addEventListener('click',()=>{
        TechBottomBlock()
        trendsIconBlock()
        TechbBottomChild[i].classList.add('disblock-1')
        TechIconChild[i].style.display = "block"

    })
}
function trendsIconBlock(){
    for(let i = 0;i<TechIconChild.length;i++){
        TechIconChild[i].style.display = "none"
    }
}









// Technology and Plateform Section 
const plateform = document.querySelector('.plateform-conatiner')
const technology = document.querySelector('.technology-container')
const plateformChild = plateform.children
const technologyChild = technology.children

for( let i=0; i<plateformChild.length; i++){
    plateformChild[i].addEventListener('click', ()=>{
        technologyContainerDisplayNone()
        technologyChild[i].style.display = "block"
    })
}

function technologyContainerDisplayNone(){
    for (let i=0;i<technologyChild.length;i++){
        technologyChild[i].style.display = "none"
    }
}

// Custumers Says Section
const cominfo = document.querySelector('.custumers-main-left')
const comimg = document.querySelector('.custumers-main-right')
const cominfoChild = cominfo.children
const comimgChild = comimg.children

for (let i=0; i<comimgChild.length-1;i++){
    comimgChild[i].addEventListener('click',()=>{
        custumersmainleft()
        cominfoChild[i].style.display = 'block'
        comimgChild[i].children[0].style.borderLeft = "5px solid #005eb8"
        comimgChild[i].children[0].style.filter = 'grayscale(0%)'
        comimgChild[i].children[0].style.opacity = 'none'
    })
}

function custumersmainleft(){
    for (let i=0; i<cominfoChild.length; i++){
        cominfoChild[i].style.display = 'none'
        comimgChild[i].children[0].style.borderLeft = "none"
        comimgChild[i].children[0].style.filter = 'grayscale(100%)'
        comimgChild[i].children[0].style.opacity = '10'
    }
}

// Custumers Says Section @media Max-Width: 764Px
let right765 = document.querySelectorAll(".rightDivImg")
var counter = 0;
right765.forEach((rightDivImg,index) => {
    rightDivImg.style.left = `${index*100}%`
});

// Prev Button Function Under Custumers Says Section 
let pre = document.querySelector(".btn-pre");
let next = document.querySelector(".btn-next");
 function GoPre(){
    counter--
    if(counter < 0){
        counter = 6
    }
    slideImage()
    custumersmainleft()
    cominfoChild[counter].style.display = 'block'
    
 }
 // Next Button Function Under Custumers Says Section 
 function GoNext(){
    counter++
    if(counter > 6){
        counter = 0
    }
    slideImage()
    custumersmainleft()
    cominfoChild[counter].style.display = 'block'
 }
 const slideImage=()=>{
    right765.forEach((rightDivImg,index) => {
        rightDivImg.style.transform = `translate(-${counter*100}%)`
    });
 }



// FAQ Section JS =>
const faqbox = document.getElementsByClassName(".qqq")
const FAQ = document.querySelector('.faq-container')

// console.log(faqbox.children)
for (let i=0; i<faqbox.length ; i++){
    faqbox[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}   

for(let i = 0; i<FAQ.children.length; i++){
    FAQ.children[i].addEventListener('click',(e)=>{
        console.log(FAQ.children[i])
        FAQ.children[i].children[1].classList.toggle('active')
        FAQ.children[i].children[0].children[1].classList.toggle('rotate-arrow-icon')
    })
}

// partner-company Section
var cpoy = document.querySelector('.company').cloneNode(true)
document.querySelector('.partner-company').appendChild(cpoy)


















