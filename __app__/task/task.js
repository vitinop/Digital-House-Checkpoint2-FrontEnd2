(function(){

    const BASE_URL_API = 'https://ctd-todo-api.herokuapp.com';
    const TASK_URL = `${BASE_URL_API}/v1/tasks/`;

    let elementTaskDescription = document.querySelection("#inputTask");
    let elementListTasks = document.querySelector("#elementListTask");

    function AddTask() {

        let valueElementDescription = elementTaskDescription.value();

        let task = JSON.stringify({
            completed: false,
            description: valueElementDescription
        });

        let addConfig = {
            method: 'POST',
            headers:{
                'Accept': '/ , application/json',
                'Content-Type': 'application/json',
                'authorization': GetTokenInLocalStorage()
            },
            body: task
        }

        fetch(TASK_URL, addConfig)
        .then(response => response.json())
        .then(task => CreateTaskElement(task));

        function CreateTaskElement(currentBodyTask) {

            // Cria cada item da base.
            let { id, description, completed, createdAt } = currentBodyTask;
                
            elementListTasks.innerHTML += `
                <li class="list__item" id="item-${id}">
                    ${description} 
                    <button 
                        class="btn__delete"
                        onclick="DeleteTask(${id})"
                    >
                     - 
                    </button>
                </li>
            `;
        }
    }

    function DeleteTask(idTask, elementTask) {

        let deleteConfig = {
            method: 'DELETE',
            headers:{
                'Accept': '/ , application/json',
                'Content-Type': 'application/json',
                'authorization': GetTokenInLocalStorage()
            }
        }

        fetch(`TASK_URL/${idTask}`, deleteConfig)
        .then(_ => DeleteTaskElement());

        function DeleteTaskElement() {
            let currentElementTask = document.querySelector(`#item-${id}`);
            currentElementTask.remove();
        }
    }

    function GetAllTasks() {

        let getAllConfig = {
            method: 'GET',
            headers:{
                'Accept': '/ , application/json',
                'Content-Type': 'application/json',
                'authorization': GetTokenInLocalStorage()
            }
        }

        fetch(TASK_URL, getAllConfig)
        .then(response => response.json())
        .then(tasks => CreateAllTasksElements(tasks));

        function CreateAllTasksElements(listTasks) {
                        
            // Zera minha lista.
            elementListTasks.innerHTML = '';

            // Cria cada item da base.
            listTasks.foreach(task => {

                let { id, description, completed, createdAt } = task;
                
                elementListTasks.innerHTML += `
                    <li class="list__item" id="item-${id}">
                        ${description} 
                        <button 
                            class="btn__delete"
                            onclick="DeleteTask(${id})"
                        >
                         - 
                        </button>
                    </li>
                `;
            });
        }
    }

    function GetTokenInLocalStorage() {
        return localStorage.getItem("Token");
    }

})();