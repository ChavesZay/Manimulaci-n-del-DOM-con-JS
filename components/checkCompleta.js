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

export default checkCompleta;