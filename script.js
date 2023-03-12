const btnAgregar= document.querySelector("[data-form-bn]");

//console.log(btnAgregar);

const createTask=(evento)=>{
    evento.preventDefault();
    const input=document.querySelector("[data-form-input]")
    console.log(input.value);
}



//Arrow functions , funciones de flecha o funciones anonimas
btnAgregar.addEventListener('click', createTask);
//listener
//click

