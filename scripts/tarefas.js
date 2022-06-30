const deslogar = document.getElementById('closeApp');
const form = document.getElementById('nova-tarefa');
const inputTarefa = document.getElementById('novaTarefa');
let isTokenNull = localStorage.getItem('Token') == null;
let isTokenEmpty = localStorage.getItem('Token') == '';
let isTokenValid =  isTokenNull || isTokenEmpty;
const urlAPI = "http://ctd-todo-api.herokuapp.com/v1"
let token = localStorage.getItem('Token');

// usuário
function getUser() {
    fetch (urlAPI + '/users/getMe', {
        method: 'GET',
        headers: {
            'Accept': '*/* , application/json, text/plain',
            'Content-Type': 'application/json', 
            'Authorization' : 'Bearer ' + token //saber como deve ser enviado o token para o authorization
        },
    })
    .then(response => response.json())
    .then(user => {
        console.log(user);
        let userInterface = document.getElementById('user-name');
        const firstName = document.createTextNode('user.firstName');
        userInterface.appendChild(firstName);
    })
}

getUser();

if (isTokenValid){
    alert('Entre com a sua conta de usuário, caso não tenha cadastre-se!');
    window.location.href = 'index.html'
    // incompatível com o FireFox!!!
}

//Sessão Finalizada
deslogar.addEventListener('click', () => {
    localStorage.removeItem('jwt');
    alert('Sessão Finalizada!')
    setTimeout(() => {
        window.localStorage.href = 'index.html'
    },3000)
})


// função para adicionar as tarefas
function getTasks() {
    fetch (urlAPI + '/tasks/getTasks', {
        method: 'GET',
        headers: {
            'Accept': '*/* , application/json, text/plain',
            'Content-Type': 'application/json', 
            'Authorization' : 'Bearer ' + token //saber como deve ser enviado o token para o authorization
        }
    })
    .then(response => response.json())
    .then(tasks => {
        console.log(tasks);
        // criar um loop que desenha as tarefas
        let taskInterface = document.querySelector('.tarefas-pendentes > div') 
        tasks.map(task => {
            if (task == null || task == ""){
                taskInterface.innerHTML += "Adicionar tarefa"

            } else {
                taskInterface.innerHTML += `
                    <li class="tarefa">
                        <div class="not-done"></div>
                        <div class="descricao">
                            <p class="nome">{task.description}</p>
                            <p class="timestamp">{task.createdAt}</p>
                        </div>
                    </li>
                ` 
            }

        })
    })
}

function createTask() { //alterar o nome para as tarefas
    fetch("https://ctd-todo-api.herokuapp.com/v1/users", {
        method: "POST",
        headers: {
          Accept: "*/*, application/json, text/plain",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: nome.value,
          lastName: sobrenome.value,
          email: email.value,
          password: password.value,
        }),
      })
}



// header authorization