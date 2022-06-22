const form = document.querySelector(".form_cad");
const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');
const input_fail = document.querySelectorAll(".input_fail");
const input_ok = document.querySelectorAll(".input_ok");
const input = document.querySelectorAll('input');
const span = document.querySelectorAll("span");

form.addEventListener("submit", (event) => {
    checkLoginEmail();
    checkLoginPassword();

    function checkLoginEmail() {
        let loginError = [];
        if (inputEmail.value === "" || inputEmail.value == null) {
            event.preventDefault();
            loginError.push("Coloque seu Email!");
            span[0].innerText = loginError;
            input[0].classList.add('input_fail');      
        }else{
            event.preventDefault();
            loginError.push("");
            span[0].innerText = loginError;   
            input[0].classList.add('input_ok');   
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
        }
    }
});

