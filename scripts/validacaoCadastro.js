const fields = document.querySelectorAll("[required]")
const nome = document.getElementById('cad_name');
const sobrenome = document.getElementById('cad_secondname');
const email = document.getElementById('cad_email');
const password = document.getElementById('cad_password');
const confirmPassword = document.getElementById('cad_confirmPassword');
const errorMsg = document.querySelectorAll('.errorMsgFormsContainer');
const span = document.querySelectorAll('span');

for (field of fields){
    field.addEvent
}


// form.addEventListener('submit', (e) => {

//     checkName();
//     checkPassword();
//     checkEmail();

//     function checkName() {
//         let mensagemError = [];
//         if (nome.value === '' || nome.value == null) {
//             e.preventDefault();
//             mensagemError.push('O nome é obrigatório')
//             errorMsg[0].innerText = mensagemError;
         
//             span[0].innerText = mensagemError;
//         }

//         else {
         
//             error[0].innerText = null;
        

//         }

//     }


    // function checkPassword() {
    //     let mensagemError = [];
    //     if (password.value.length == 0) {
    //         e.preventDefault();
    //         mensagemError.push('A senha é obrigatória')
    //         error[2].innerText = mensagemError;
    //         formItem[2].classList.add('fail');

    //     }

    //     else if (password.value.length < 6) {
    //         e.preventDefault();
    //         mensagemError.push('A senha deve ter no mínimo 6 caracteres')
    //         error[2].innerText = mensagemError;
    //         formItem[2].classList.add('fail');
    //     }

    //     else if (password.value.length > 15) {
    //         e.preventDefault();
    //         mensagemError.push('A senha deve ter no máximo 15 caracteres')
    //         error[2].innerText = mensagemError;
    //         formItem[2].classList.add('fail');
    //     }

    //     else if (!/[A-Z]/.test(password.value)) {
    //         e.preventDefault();
    //         mensagemError.push('A senha deve ter uma letra maíuscula,um número e um caracter especial (-,*,#,>)')
    //         error[2].innerText = mensagemError;
    //         formItem[2].classList.add('fail');


    //     }

    //     else if (!/[0-9]/.test(password.value)) {
    //         e.preventDefault();
    //         mensagemError.push('A senha deve ter uma letra maíuscula,um número e um caracter especial (-,*,#,>)')
    //         error[2].innerText = mensagemError;
    //         formItem[2].classList.add('fail');


    //     }

    //     else if (!/[^A-Za-z0-9]/.test(password.value)) {
    //         e.preventDefault();
    //         mensagemError.push('A senha deve ter uma letra maíuscula,um número e um caracter especial (-,*,#,>)')
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
        



        
    // }


    // function checkEmail() {
    //     let mensagemError = [];
    //     if (email.value.length == 0) {
    //         e.preventDefault();
    //         mensagemError.push('O email é obrigatório')
    //         error[1].innerText = mensagemError;
    //         formItem[1].classList.add('fail');

    //     }

    //     else if (!isEmail(email.value)){
    //         e.preventDefault();
    //         mensagemError.push('Caro usuario, você nao digitou um email certo')
    //         error[1].innerText = mensagemError;
    //         formItem[1].classList.add('fail');

            

    //     }

    //     else {
    //         formItem[1].classList.remove('fail');
    //         error[1].innerText = null;
    //         formItem[1].classList.add('sucess');

    //     }

    //     function isEmail(email) {
    //         return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    //     }


    // }

    

