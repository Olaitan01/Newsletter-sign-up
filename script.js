const subscribeBtn= document.querySelector(".subscribe_btn")
const dismissBtb=document.querySelector(".dismiss_btn")
const modal=document.querySelector(".sucess-modal")
const newletterWrapper=document.querySelector(".newsletter-wrapper")

subscribeBtn.addEventListener("click",()=>{
    if(modal.style.display=="block"){
        modal.style.display="none";
        newletterWrapper.style.display="block"
        console.log("hi")
    }else{
        modal.style.display="block"
        newletterWrapper.style.display="none"
console.log("no")
    }
})