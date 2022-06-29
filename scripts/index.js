const form = document.querySelector(".form_cad");
const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');
const input_fail = document.querySelectorAll(".input_fail");
const input_ok = document.querySelectorAll(".input_ok");
const input = document.querySelectorAll('input');
const span = document.querySelectorAll("span");
const creationStatus = document.querySelector('#creationstatus');
const user_sucesso = document.querySelectorAll('user_sucesso');
const user_falha = document.querySelectorAll('user_falha');

let checkEmailStatus = false
let checkPasswordStatus = false

form.addEventListener("submit", (event) => {
    checkLoginEmail();
    checkLoginPassword();
    
    function checkLoginEmail() {
        let loginError = [];
        if (inputEmail.value.length == 0) {
            event.preventDefault();
            loginError.push("Coloque seu Email!");
            span[0].innerText = loginError;
            input[0].classList.add('input_fail');      
        }
        else if (!isEmail(email.value)) {
            event.preventDefault();
            loginError.push("Insira um endereço de email válido");
            span[0].innerText = loginError;
            input[0].classList.add('input_fail');
          }
        else{
            event.preventDefault();
            loginError.push("");
            span[0].innerText = loginError;   
            input[0].classList.add('input_ok');  
            checkEmailStatus = true;
        }
        function isEmail(email) {
            return /^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/.test(
              email
            );
          }
    }

    function checkLoginPassword() {
        let loginError = [];
        if (inputPassword.value == "" || inputPassword.value == null) {
            event.preventDefault();
            loginError.push("Coloque a senha!");
            span[1].innerText = loginError;
            input[1].classList.add('input_fail');
        }else{
            event.preventDefault();
            loginError.push("");
            span[1].innerText = loginError;   
            input[1].classList.add('input_ok');
            checkPasswordStatus = true;
        }
    }
});

