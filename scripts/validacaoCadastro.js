const form = document.querySelector(".form_cad");
const nome = document.getElementById("cad_name");
const sobrenome = document.getElementById("cad_secondname");
const email = document.getElementById("cad_email");
const password = document.getElementById("cad_password");
const confirmPassword = document.getElementById("cad_confirmPassword");
const errorMsg = document.querySelectorAll(".errorMsg");
const span = document.querySelectorAll("span");
const input_fail = document.querySelectorAll(".input_fail");
const input_ok = document.querySelectorAll(".input_ok");
const input = document.querySelectorAll('input');

form.addEventListener("submit", (event) => {
  checkName();
  checkSecondName();
  checkEmail();
  checkPassword();
  checkConfirmPassword();

  // validação de nome campo não vazio
  function checkName() {
    let mensagemError = [];
    if (nome.value === "" || nome.value == null) {
      event.preventDefault();
      mensagemError.push("O nome é obrigatório");
      span[0].innerText = mensagemError;
      input[0].classList.add('input_fail');
    }
    else {
      input[0].classList.add('input_ok');
      mensagemError.push("");
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

  // validação email
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
    } else {
      span[2].innerText = null;
    }

    function isEmail(email) {
      return /^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/.test(
        email
      );
    }
  }

  // validação de senhas
  function checkPassword() {
    let mensagemError = [];
    if (password.value == null || password.value === "") {
      event.preventDefault();
      mensagemError.push("A senha é obrigatória");
      span[3].innerText = mensagemError;
    } else {
      span[3].innerText = null;
    }
  }

  // validação de  confirmação de senha
  function checkConfirmPassword() {
    let mensagemError = [];
    if (confirmPassword.value == null || confirmPassword.value === "") {
      event.preventDefault();
      mensagemError.push("A confirmação da senha é obrigatória");
      span[4].innerText = mensagemError;
    } else if (confirmPassword.value !== password.value) {
      event.preventDefault();
      mensagemError.push("A senha de confirmação deve ser igual senha inserida");
      span[4].innerText = mensagemError;
    } else {
      span[4].innerText = null;
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