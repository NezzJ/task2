/*const formEl =document.querySelector('#form')
const userName =document.querySelector('#username')
const emailEl =document.querySelector('#email')
const tokenActivation =document.querySelector('#activation')
let formValidation =document.querySelector('#validation')


formEl.addEventListener('submit',(e)=> {
    e.preventDefault();
    checkInputs()

})
function checkInputs(){
    const userNameValue = userName.value.trim();
   const emailElValue = emailEl.value.trim();
   const tokenActivationValue = tokenActivation.value.trim();

   if (userNameValue === "" || userNameValue === null ){
       formValidation.textContent="Username must be filled out !!!"
   } else{
       formValidation.textContent = "";
   }
}*/

let fullName = document.querySelector('#username').value;
let Email = document.querySelector('#email').value;
let Token = document.querySelector('#activation').value;
let validate = document.querySelector('#validation-box').value;

function ValidateName(){
    if (fullName === "" || fullName === null){
        validate.textContent = "Username is empty";
    } else{
        validate.textContent =""
    }
}

function validateEmail(){
    if (!Email.includes(@) || Email === null){
        validate.textContent = "Username is empty";
    } else{
        validate.textContent =""
    }
}

function validateEmail(){
    if (Token === "" || Token === null){
        validate.textContent = "Username is empty";
    } else{
        validate.textContent =""
    }
}
