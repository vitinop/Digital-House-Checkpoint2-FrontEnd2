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
    alert('Sessão Finalizada!')
    setTimeout(() => {
        window.localStorage.href = 'index.html'
    },3000)
})