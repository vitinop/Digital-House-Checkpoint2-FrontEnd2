// const form = document.querySelector(".form_cad");
// const inputEmail = document.getElementById('inputEmail');
// const inputPassword = document.getElementById('inputPassword');
// const input_fail = document.querySelectorAll(".input_fail");
// const input_ok = document.querySelectorAll(".input_ok");
// const input = document.querySelectorAll('input');
// const span = document.querySelectorAll("span");
// const creationStatus = document.querySelector('#creationstatus');
// const user_sucesso = document.querySelectorAll('user_sucesso');
// const user_falha = document.querySelectorAll('user_falha');

// let checkEmailStatus = false
// let checkPasswordStatus = false

// form.addEventListener("submit", (event) => {
//     checkLoginEmail();
//     checkLoginPassword();
//     event.preventDefault();

//     function checkLoginEmail() {
//         let loginError = [];
//         if (inputEmail.value.length == 0) {
//             event.preventDefault();
//             loginError.push("Coloque seu Email!");
//             span[0].innerText = loginError;
//             input[0].classList.add('input_fail');
//             checkEmailStatus = false;
//         }
//         else if (!isEmail(email.value)) {
//             event.preventDefault();
//             loginError.push("Insira um endereço de email válido");
//             span[0].innerText = loginError;
//             input[0].classList.add('input_fail');
//             checkEmailStatus = false;
//         }
//         else {
//             loginError.push("");
//             span[0].innerText = loginError;
//             input[0].classList.add('input_ok');
//             checkEmailStatus = true;
//             event.preventDefault();
//         }
//         function isEmail(email) {
//             return /^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/.test(
//                 email
//             );
//         }
//     }

//     function checkLoginPassword() {
//         let loginError = [];
//         if (inputPassword.value == "" || inputPassword.value == null) {
//             event.preventDefault();
//             loginError.push("Coloque a senha!");
//             span[1].innerText = loginError;
//             input[1].classList.add('input_fail');
//             checkPasswordStatus = false;
//         } else {
//             loginError.push("");
//             span[1].innerText = loginError;
//             input[1].classList.add('input_ok');
//             checkPasswordStatus = true;
//             event.preventDefault();
//         }
//     }
// console.log('test')
//     function fetchAPI() {
//         if (checkEmailStatus == true && checkPasswordStatus == true){
//         fetch('https://ctd-todo-api.herokuapp.com/v1/users/login', {
//             method: 'POST',
//             headers: {
//                 'Accept': '*/* , application/json, text/plain',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 email: `${inputEmail.value}`,
//                 password: `${inputPassword.value}`,
//             }),
//         })
//             .then((res) => {
//                 console.log(res)
//                 if (res.status == 201) { 
//                     res.json().then(data => {
//                         if (data.jwt != undefined) {
//                             localStorage.setItem("Token", JSON.stringify(data.jwt));
//                             setTimeout(() => {
//                                 window.location.href = "tarefas.html";
//                               },4000);
//                         } else {
//                             console.log({ "Error": "Não foi possível gerar o Token" });
//                         }
//                     });
//                 } else if (res.status == 400) {
//                     console.log({ "Error": "Usuário ou senha incorretos" });

//                 } else if (res.status == 404) {
//                     console.log({ "Error": "Usuário ou senha incorretos" });
//                 } else {
//                     console.log({ "Error": "Erro de conexao do servidor" });
//                 }
//             });

//       };
//     }
//     fetchAPI();
// })





// ).catch((data) => {

//     if (data == 'Error: Bad Request') {
//         confirmLogin.innerHTML = '<h1>Senha ou email incorretos</h1>'
//         confirmLogin.style.opacity = '1'
//         confirmLogin.style.backgroundColor = 'red'

//     }

//     if (data == 'Error: Not Found') {
//         confirmLogin.innerHTML = '<h1>Usuário não existe</h1>'
//         confirmLogin.style.opacity = '1'
//         confirmLogin.style.backgroundColor = 'red'

//     }
   
   
// })








const form = document.querySelector(".form_cad");
const email = document.getElementById("cad_email");
const password = document.getElementById("cad_password");
const span = document.querySelectorAll("span");
const input_fail = document.querySelectorAll(".input_fail");
const input_ok = document.querySelectorAll(".input_ok");
const input = document.querySelectorAll("input");
const creationStatus = document.querySelector("#creationstatus");
const user_sucesso = document.querySelectorAll("user_sucesso");
const user_falha = document.querySelectorAll("user_falha");

let checkEmailStatus = false;
let checkPasswordStatus = false;

form.addEventListener("submit", (event) =>{
    checkEmail();
    checkPassword();

        // validação email
    function checkEmail() {
        let mensagemError = [];
        // validação de email campo não vazio
        if (email.value.length == 0) {
          event.preventDefault();
          mensagemError.push("O e-mail é obrigatório");
          span[0].innerText = mensagemError;
          input[0].classList.add("input_fail");
          checkEmailStatus = false;
        }
        // validação de email - campo é realmente um email
        else if (!isEmail(email.value)) {
          event.preventDefault();
          mensagemError.push("Insira um endereço de email válido");
          span[0].innerText = mensagemError;
          input[0].classList.add("input_fail");
          checkEmailStatus = false;
        } else {
          event.preventDefault();
          span[0].innerText = null;
          input[0].classList.add("input_ok");
          mensagemError.push("");
          span[0].innerText = mensagemError;
          checkEmailStatus = true;
        }
    
        function isEmail(email) {
          return /^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/.test(
            email
          );
        }
      }

    function checkPassword() {
        let mensagemError = [];
        if (password.value == null || password.value === "") {
          event.preventDefault();
          mensagemError.push("A senha é obrigatória");
          span[1].innerText = mensagemError;
          input[1].classList.add("input_fail");
          checkPasswordStatus = false;
        } else {
          event.preventDefault();
          span[1].innerText = null;
          input[1].classList.add("input_ok");
          mensagemError.push("");
          span[1].innerText = mensagemError;
          checkPasswordStatus = true;
        }
      }

});