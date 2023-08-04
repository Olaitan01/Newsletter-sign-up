
const form = document.getElementById("form")
const email=document.getElementById("email")
const submit =document.getElementById("submit")
const successModal=document.getElementById("success-modal")
const dismissBtn=document.getElementById("dismiss-btn")
const errorMessage=document.getElementById("error-message")
const userEmail=document.getElementById("user-email")
// const error =[]

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(email.value=="" || email.value==null){
      let err= "valid email required" 
        errorMessage.innerText= err
        
    }
    else if(!email.value.includes("@")){
        let err= "valid email required" 
        errorMessage.innerText= err
    }
   else {
        userEmail.innerText=email.value
        document.querySelector(".modal-container").style.display="block"
        email.value=""
        
    }
   
    
})


dismissBtn.addEventListener("click",()=>{
    document.querySelector(".modal-container").style.display="none"

})