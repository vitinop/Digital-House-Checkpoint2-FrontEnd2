(function(){

    const BASE_URL_API = 'https://ctd-todo-api.herokuapp.com';
    const SIGNUP_URL = `${BASE_URL_API}/v1/users/`;

    let formSignUp = document.forms["signUp"];

    formSignUp.addEventListener("submit", event => {
            
        let { 
            firstName, 
            lastName, 
            email, 
            password, 
            repassword 
        } = event.target.elements;

        let firstNameValue = firstName.value;
        let lastNameValue = lastName.value;
        let emailValue = user.value;
        let passwordValue = password.value;
        let repasswordValue = password.value;

        let isPasswordValid = () => passwordValue === repasswordValue;

        if(isPasswordValid) {

            let registerUser = JSON.stringify({
                firstName: firstNameValue,
                lastName: lastNameValue,
                email: emailValue,
                password: passwordValue
            });

            let authConfig = {
                method: 'POST',
                headers: {
                    'Accept': '*/* , application/json, text/plain',
                    'Content-Type': 'application/json'
                },
                body: registerUser
            }
        
            fetch(SIGNUP_URL, authConfig)
                .then(response => response.json())
                .then(token => RegisterTokenInBrowserAndRedirect(token));
    
            function RegisterTokenInBrowserAndRedirect(currentToken) {
                localStorage.setItem("Token", currentToken);
                window.replace('/task');
            }

        }
        else {
            alert('Por favor, verifique a senha.');
        }
    });

})();