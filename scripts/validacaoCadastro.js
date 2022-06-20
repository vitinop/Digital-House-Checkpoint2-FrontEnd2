const form = document.querySelector(".form_cad");
const nome = document.getElementById("cad_name");
const sobrenome = document.getElementById("cad_secondname");
const email = document.getElementById("cad_email");
const password = document.getElementById("cad_password");
const confirmPassword = document.getElementById("cad_confirmPassword");
const errorMsg = document.querySelectorAll(".errorMsg");
const span = document.querySelectorAll("span");

form.addEventListener("submit", (event) => {
  checkName();
  checkSecondName();
  checkEmail();
  // checkPassword();

  // validação de nome campo não vazio
  function checkName() {
    let mensagemError = [];
    if (nome.value === "" || nome.value == null) {
      event.preventDefault();
      mensagemError.push("O nome é obrigatório");
      span[0].innerText = mensagemError;
    }
  }

  // validação de sobrenome campo não vazio
  function checkSecondName() {
    let mensagemError = [];
    if (sobrenome.value === "" || sobrenome.value == null) {
      event.preventDefault();
      mensagemError.push("O sobrenome é obrigatório");
      span[1].innerText = mensagemError;
    }
  }



  
    // validação emaill
  function checkEmail() {
    let mensagemError = [];
    // validação de email campo não vazio
    if (email.value.length == 0) {
      event.preventDefault();
      mensagemError.push("O email é obrigatório");
      span[2].innerText = mensagemError;
    }
    // validação de email - campo é realmente um email
    else if (!isEmail(email.value)) {
      event.preventDefault();
      mensagemError.push("Insira um endereço de email válido");
      span[2].innerText = mensagemError;
    } 
    else {
      span[2].innerText = null;
    }

    function isEmail(email) {
        return /^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/.test(email)
    } 
  }



 
});

//     else if (password.value.length < 6) {
//         e.preventDefault();
//         mensagemError.push('A senha deve ter no mínimo 6 caracteres e no maximo 15 caracteres, sendo uma Letra maíuscula, um numéro e um caracter especial')
//         error[2].innerText = mensagemError;
//         formItem[2].classList.add('fail');
//     }

//     else if (password.value.length > 15) {
//         e.preventDefault();
//         mensagemError.push('A senha deve ter no mínimo 6 caracteres e no maximo 15 caracteres, sendo uma Letra maíuscula, um numéro e um caracter especial')
//         error[2].innerText = mensagemError;
//         formItem[2].classList.add('fail');
//     }

//     else if (!/[A-Z]/.test(password.value)) {
//         e.preventDefault();
//         mensagemError.push('A senha deve ter no mínimo 6 caracteres e no maximo 15 caracteres, sendo uma Letra maíuscula, um numéro e um caracter especial')
//         error[2].innerText = mensagemError;
//         formItem[2].classList.add('fail');

//     }

//     else if (!/[0-9]/.test(password.value)) {
//         e.preventDefault();
//         mensagemError.push('A senha deve ter no mínimo 6 caracteres e no maximo 15 caracteres, sendo uma Letra maíuscula, um numéro e um caracter especial')
//         error[2].innerText = mensagemError;
//         formItem[2].classList.add('fail');

//     }

//     else if (!/[^A-Za-z0-9]/.test(password.value)) {
//         e.preventDefault();
//         mensagemError.push('A senha deve ter no mínimo 6 caracteres e no maximo 15 caracteres, sendo uma Letra maíuscula, um numéro e um caracter especial')
//         error[2].innerText = mensagemError;
//         formItem[2].classList.add('fail');

//     }

//     else {
//         formItem[2].classList.remove('fail');
//         error[2].innerText = null;
//         formItem[2].classList.add('sucess');

//     }

//     if (password.value != confirmPassword.value) {
//         e.preventDefault();
//         mensagemError.push('As senhas devem ser iguais')
//         error[3].innerText = mensagemError;
//         formItem[3].classList.add('fail');

//     }
