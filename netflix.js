window.addEventListener("scroll",()=>{
    let navbar=document.querySelector(".navbar");
    if (window.scrollY>100){
        navbar.classList.add("scrolled")
    }
    else{
        navbar.classList.remove("scrolled")
    }
})
let profileIcon=document.querySelector(".profile-icon");
profileIcon.addEventListener("click",()=>{
    window.location.href="profile.html";

})

let moviecard=document.querySelectorAll(".content-card");
moviecard.forEach((card)=>{
moviecard.addEventListener("mouseEnter",()=>{
card.style.transform="scale(1.05)";
})
    moviecard.addEventListener("mouseLeave",()=>{
card.style.transform="scale(1)";
})
})