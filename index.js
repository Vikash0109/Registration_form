let userName=document.getElementById("dusername");
let email=document.getElementById("demail");
let password=document.getElementById("dpassword");
let confpass=document.getElementById("dfpassword");
let form=document.querySelector("form");

function validateInput(){
    if(userName.value.trim()===""){
       onError(userName,"Please enter username");
    }else{
        onSuccess(userName);
    }
    if(email.value.trim()===""){
        onError(email,"Please enter your email id");
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Email is not valid");
        }else{
            onSuccess(email);
        }
    }


    if(password.value.trim()===""){
        onError(password,"Please enter password");
     }else{
         onSuccess(password);
     }
     if(confpass.value.trim()===""){
        onError(confpass,"Password cannot be empty");
     }else{
         if(password.value.trim()!==confpass.value.trim()){
            onError(confpass,"Password & Confirm password  are not matching");
         }
         else
         onSuccess(confpass);
     }
}

document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
});

function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden"; 
    parent.classList.remove("error");
    parent.classList.add("success");  
}
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
    parent.classList.add("error");
    parent.classList.remove("success");

}

function isValidEmail(email){
   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}




