/*Immediately invoked function expression (IIFE)
(()=>{})() Es para que el usuario no pueda ver el 
codigo mediante la herramienta de desarrolador*/
(()=>{
const btnAgregar= document.querySelector("[data-form-bn]");

//console.log(btnAgregar);

const createTask=(evento)=>{
    evento.preventDefault();
    const input=document.querySelector("[data-form-input]")
    const valor=input.value;
    const lista=document.querySelector("[data-lista]")

    const tarea=document.createElement("li");
    tarea.classList.add("card");
    input.value="";
    const tareaContent=document.createElement('div');
    tareaContent.appendChild(checkCompleta());

    const titleTarea= document.createElement('span');
    titleTarea.classList.add('task');
    titleTarea.innerText=valor;
    tareaContent.appendChild(titleTarea);

    //backticks  templete String
    const contenido=`
   ${checkCompleta()}
  <i class="fas fa-trash-alt trashIcon icon"></i>`;
 
  //tarea.innerHTML=contenido;
  tarea.appendChild(tareaContent);
  lista.appendChild(tarea);
}

//Arrow functions , funciones de flecha o funciones anonimas
btnAgregar.addEventListener('click', createTask);
//listener
//click

const checkCompleta=()=>{
    const i= document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener('click',completeTarea)
    return i;
}

const completeTarea= (event)=>{
   const element=event.target;
   //Si existe la clase la quita y si no la pone 
   element.classList.toggle("fas");
   element.classList.toggle("completeIcon");
   element.classList.toggle("far");
}

})();