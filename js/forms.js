const text=document.querySelector('#text');
const textError=document.querySelector('.text-error');
text.addEventListener('input', function(){
   let nameRegEx= RegExp('^[A-Z]{1}[a-z]{2,}$');
   if(nameRegEx.test(text.value)){
       textError.textContent="";
   }
   else
   textError.textContent="Incorrect name";
});

const tel = document.querySelector("#tel");
const telError = document.querySelector(".tel-error");
tel.oninput = function () {
let telRegex = RegExp('^\\d{2}(\\s{1}\\d{10})$');
if (telRegex.test(tel.value))
    telError.textContent = "";
else
    telError.textContent = "Telephone Number is Incorrect!"
};

const pwd = document.querySelector("#pwd");
const pwdError = document.querySelector(".pwd-error");
pwd.oninput = function () {
let pwdRegex1 = RegExp('^(?=.*[A-Z])(?=.*\\d)(?=.*[^\\dA-Z]).{8,}$');
let pwdRegex2 = RegExp('^[0-9a-zA-Z]*[@#$%][0-9a-zA-Z]*$');
if (pwdRegex1.test(pwd.value) && pwdRegex2.test(pwd.value))
    pwdError.textContent = "";
else
    pwdError.textContent = "Inavlid Password!"
};

function checkEmail(){
    var email = document.getElementById('email').value;
    let emailRegEx= RegExp('^[a-zA-Z]+([._+-]{0,1}[a-zA-Z0-9]+)*@[a-zA-Z0-9]+.[(com)|(co)|(net)]+(?:\\.[a-z]{2,}){0,1}$');
    if(!emailRegEx.test(email)){
 alert('Incorrect Email');
 return false;
   }
   else
   return true;

}
const salary=document.querySelector('#salary');
const output=document.querySelector('.salary-output');
salary.addEventListener('input', function(){
    output.textContent=salary.value;
});