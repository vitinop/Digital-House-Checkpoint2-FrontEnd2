const deslogar = document.getElementById('closeApp');
const form = document.getElementById('nova-tarefa');
const inputTarefa = document.getElementById('novaTarefa');

if (localStorage.getItem('Token') == null || localStorage.getItem('Token') == ''){
    alert('Entre com a sua conta de usuário, caso não tenha cadastre-se!');
    window.location.href = 'index.html'
    // incompatível com o FireFox!!!
}

//Sessão Finalizada
deslogar.addEventListener('click', () => {
    localStorage.removeItem('jwt');
    alert('Finalizar Sessão?')
    setTimeout(() => {
        window.localStorage.href = 'index.html'
    },3000)
})

//addTarefa( sem resultado )
form.addEventListener('submit', (e) => {
    if(inputTarefa.nodeValue.length != 0 ){
        function addTarefa() {
            fetch('https://ctd-todo-api.herokuapp.com/v1/tasks', {
                method: 'POST',
                headers:{
                    Accept: "*/*, application/json, text/plain",
                    "Content-Type": "application/json",
                    "authorization": `${inputTarefa.getItem('jwt')}`
                },
                body: JSON.stringify({
                    "description": `${inputTarefa.velue}`,
                    "completed": false
                })
            })
            .then(res => ReadableStream.json())
            .then(data => {
                pendentes.innerHTML +=`
                <li class="tarefa">
                <div class="not-done"></div>
                <div class="descricao">
                <p class="nome">${data.description}</p>
                <p class="timestamp">${data.createdAt}</p>
                </div>
                </li>
                `
                console.log('test1')
            })
        }
    } else if (inputTarefa !== '' && inputTarefa != null){
        alert('Tarefa Invalida!')
        console.log('test2')
    }

})
addTarefa();
e.preventDefault();