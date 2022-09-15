const form = document.forms.todo;

const {todoInput} = form.elements;
const button = document.querySelector('.add-btn');
const ul = document.getElementById('list');
const errorMessage = document.querySelector('.error-message');


function addContent (){
    const li = document.createElement('li')
    li.className = 'todo-list';
    li.innerHTML = todoInput.value;
    ul.append(li);

    let button = document.createElement('button');
    button.innerHTML = 'Delete';
    button.className = 'remove-btn';
    li.append(button);
}

ul.addEventListener('click', (event) => {
    const isRemoveButton = event.target.className === 'remove-btn';

    if (isRemoveButton) {
        const removeButton = event.target;
        const albumsTitle = removeButton.closest('.todo-list');
        albumsTitle.remove();
    }
});

form.onsubmit = (event) => {
    event.preventDefault();

    button.addEventListener('click', (event) => {
        event.target = addContent();
        document.todo.reset();
    });

    if (todoInput.value.trim().length === 0) {
        todoInput.classList.add('error');
        errorMessage.innerHTML = 'Please, type text';
        return;
    }
}

todoInput.oninput = () => {
    const isErrorField = todoInput.classList.contains('error');
  
    if (isErrorField) {
      todoInput.classList.remove('error');
      errorMessage.innerHTML = '';
    }
};