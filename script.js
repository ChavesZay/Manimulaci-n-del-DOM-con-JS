/*Immediately invoked function expression (IIFE)
(()=>{})() Es para que el usuario no pueda ver el 
codigo mediante la herramienta de desarrolador*/

import checkCompleta from "./components/checkCompleta.js";
import deleteIcon from "./components/deleteIcon.js";
const btnAgregar = document.querySelector("[data-form-bn]");

//console.log(btnAgregar);

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]")
    const valor = input.value;
    const lista = document.querySelector("[data-lista]")

    const tarea = document.createElement("li");
    tarea.classList.add("card");
    input.value = "";
    const tareaContent = document.createElement('div');

    const titleTarea = document.createElement('span');
    titleTarea.classList.add('task');
    titleTarea.innerText = valor;

    tareaContent.appendChild(checkCompleta());
    tareaContent.appendChild(titleTarea);

    //tarea.innerHTML=contenido;
    tarea.appendChild(tareaContent);
    tarea.appendChild(deleteIcon());
    lista.appendChild(tarea);
}

//Arrow functions , funciones de flecha o funciones anonimas
btnAgregar.addEventListener('click', createTask);
//listener
//click


