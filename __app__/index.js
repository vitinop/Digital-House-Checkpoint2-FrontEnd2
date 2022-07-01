(function(){

    const BASE_URL_API = 'https://ctd-todo-api.herokuapp.com';
    const AUTH_URL = `${BASE_URL_API}/v1/users/login`;

    let formSignIn = document.forms["signIn"];

    formSignIn.addEventListener("submit", event => {
            
        let { user, password } = event.target.elements;

        let userValue = user.value;
        let passwordValue = password.value;

        let credentialUser = JSON.stringify({
            email: userValue,
            password: passwordValue
        });

        let authConfig = {
            method: 'POST',
            headers: {
                'Accept': '*/* , application/json, text/plain',
                'Content-Type': 'application/json'
            },
            body: credentialUser
        }

        fetch(AUTH_URL, authConfig)
            .then(response => response.json())
            .then(token => RegisterTokenInBrowserAndRedirect(token));

        function RegisterTokenInBrowserAndRedirect(currentToken) {
            localStorage.setItem("Token", currentToken);
            window.replace('/task');
        }
    });
})();