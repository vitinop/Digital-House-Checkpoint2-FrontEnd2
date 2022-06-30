const deslogar = document.getElementById('#closeApp');
const form = document.getElementById('nova-tarefa');
const inputTarefa = document.getElementById('novaTarefa');

if (localStorage.getItem('jwt') == null || localStorage.getItem('jwt') == ''){
    alert('Entre com a sua conta de usuário!, caso não tenha cadastre-se!');
    window.location.href = 'index.html'
    // incompatível com o FireFox!!!
}

deslogar.addEventListener('click'), () => {
    localStorage.removeItem('jwt');
    setTimeout(() => {
        window.localStorage.href = 'index.html'
    },1000)
}