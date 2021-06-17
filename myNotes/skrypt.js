const addBtn = document.querySelector('.btn.btn-primary');
const deleteAllBtn = document.querySelector('.btn.btn-success');
const closeBtn = document.querySelector('.close')
const noteBody = document.querySelector('.note-body');
const saveBtn = document.querySelector('.btn.btn-warning');
const cancelBtn = document.querySelector('.btn.btn-danger');
const error = document.querySelector('.error');
const textArea = document.querySelector('#cos');
const category = document.querySelector('.form-select');
const addNote = document.querySelector('.addNoteArea');
const noteArea = document.querySelector('.NoteArea');
const titleNote = document.querySelector('.title');
const colorNoteBody = document.querySelector('.note');
const colorNoteHeader = document.querySelector('.note-header');


let cardID = 0;
let selectedValue;

const openAnother = () => {

    addNote.style.display = 'flex';

}
const cancelNoteAdd = () => {

    addNote.style.display = 'none';
    textArea.value = '';
    category.selectedIndex = 0;

}
const closeNote = () => {


}

const addNoteNow = () => {
    if (category.options[category.selectedIndex].value !== '0' && textArea.value !== '') {
        createNote();
        error.style.visibility = 'hidden';

    }
    else {
        error.style.visibility = 'visible';
    }

}
const createNote = () => {

    const newNote = document.createElement('div');
    newNote.classList.add('note');
    newNote.setAttribute('id', cardID);




    newNote.innerHTML = `  <div class="note-header">
     <div class="title">${category.options[category.selectedIndex].text}</div >
        <button class="close" onclick ="deleteNote(${cardID})" ><i class="fas fa-times icon"></i></button>
 </div >
    <div class="note-body">${textArea.value}</div>`;
    changeColor(newNote, category.options[category.selectedIndex].text);
    noteArea.appendChild(newNote);

    cardID++;
    textArea.value = '';
    category.selectedIndex = 0;
    addNote.style.display = 'none';




}
function changeColor(note, txt) {

    switch (txt) {
        case 'Zakupy':
            note.style.backgroundColor = 'rgb(72,255,0)';
            break;
        case 'Praca':
            note.style.backgroundColor = 'rgb(255,243,0)';
            break;
        case 'Inne':
            note.style.backgroundColor = 'rgb(0,170,255)';
            break;
    }


}


const deleteNote = id => {
    const noteToDelete = document.getElementById(id);
    noteArea.removeChild(noteToDelete)
}



const deleteAll = () => {


    noteArea.textContent = '';

}




addBtn.addEventListener('click', openAnother);
cancelBtn.addEventListener('click', cancelNoteAdd);
closeBtn.addEventListener('click', closeNote);
saveBtn.addEventListener('click', addNoteNow);
deleteAllBtn.addEventListener('click', deleteAll);
