/**
* Función addTask - Agrega una tarea a la lista de tareas
*
* @param {Array} taskList - La lista actual de tareas
* @param {Object} task - La tarea a agregar
* @return {Array} - Retorna la lista de tareas actualizada
*/
function addTask(taskList, task) {
    taskList.push(task);
    return taskList;
    }
    /**
    * Función showTasks - Muestra todas las tareas en la lista
    *
    * @param {Array} taskList - La lista de tareas a mostrar
    */
    const showTasks = (taskList) => {
    console.log("Tareas pendientes:");
    taskList.forEach((task) => console.log(`- ${task.taskName} (Prioridad: ${task.priority})`));
    };
    /**
    * Constructor Task - Crea una nueva tarea con un nombre y una prioridad
    *
    * @param {string} taskName - El nombre de la tarea
    * @param {number} priority - La prioridad de la tarea
    */
    function Task(taskName, priority) {
    this.taskName = taskName;
    this.priority = priority;
    }
    /**
    * Función sortTasks - Ordena la lista de tareas según su prioridad
    *
    * @param {Array} taskList - La lista de tareas a ordenar
    * @return {Array} - Retorna la lista de tareas ordenada
    */
    const sortTasks = function(taskList) {
    return taskList.sort((a, b) => a.priority - b.priority);
    };
    /**
    * Función filterTasks - Filtra la lista de tareas basada en una función de filtro proporcionada
    *
    * @param {Array} taskList - La lista de tareas a filtrar
    * @param {Function} filterFunction - La función de filtro a aplicar
    * @return {Array} - Retorna la lista de tareas filtrada
    */
    function filterTasks(taskList, filterFunction) {
    return taskList.filter(filterFunction);
    }
    // Inicialización de la lista de tareas
    let taskList = [];
    // Usando if y operadores de comparación para verificar si la lista de tareas está vacía
    if (taskList.length === 0) {
    // Agregando tareas de ejemplo usando addTask y el constructor Task
    taskList = addTask(taskList, new Task('Comprar leche', 2));
    taskList = addTask(taskList, new Task('Enviar correo', 1));
    taskList = addTask(taskList, new Task('Hacer ejercicio', 3));
    }
    // Usando operador ternario para determinar el mensaje a mostrar según si hay tareas pendientes o no
    const message = taskList.length > 0 ? "Tienes tareas pendientes" : "No hay tareas pendientes";
    console.log(message);
    // Mostrando tareas antes de ordenarlas
    showTasks(taskList);
    // Ordenando tareas por prioridad y mostrándolas
    taskList = sortTasks(taskList);
    console.log("Tareas ordenadas por prioridad:");
    showTasks(taskList);
    // Filtrando y mostrando tareas con prioridad mayor que 1 usando una función anónima de flecha
    const importantTasks = filterTasks(taskList, task => task.priority > 1);
    console.log("Tareas importantes:");
    showTasks(importantTasks);