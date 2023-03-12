
const deleteIcon=()=>{
    const i= document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon","icon");
    i.addEventListener('click',eliminarTarea)
    return i;
}
const eliminarTarea=(event)=>{
    const padre=event.target.parentElement;
    padre.remove();

}

export default deleteIcon;