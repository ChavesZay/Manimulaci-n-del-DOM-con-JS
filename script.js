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
    //backticks  templete String
    const contenido=`  <div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${valor}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`
 
  tarea.innerHTML=contenido;

  lista.appendChild(tarea);
    console.log(contenido);
}




//Arrow functions , funciones de flecha o funciones anonimas
btnAgregar.addEventListener('click', createTask);
//listener
//click

