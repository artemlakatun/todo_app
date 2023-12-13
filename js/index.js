const todoForm = document.querySelector('#form');
const formInput = document.querySelector('#form-input');
const todoList = document.querySelector('#todo-list');

todoForm.addEventListener('submit', addTodoItem);

function addTodoItem(event) {
    event.preventDefault();

    const title = formInput.value;

    if(title.trim() === '') {
        console.log('empty!');
    }

    const todoItem = createTodoItem(title);
    todoList.append(todoItem);

    formInput.value = '';
}

function createTodoItem(title) {
    const checkBoxEl = document.createElement('input')
    checkBoxEl.setAttribute('type', 'checkbox');
    checkBoxEl.classList.add('checkbox');
    checkBoxEl.addEventListener('change', toggleTodoItem)

    const titleEl = document.createElement('label');
    titleEl.classList.add('todo-title');
    titleEl.textContent = title;

    const editInputEl = document.createElement('input');
    editInputEl.setAttribute('type', 'text');
    editInputEl.classList.add('todo-input');

    const editButtonEl = document.createElement('button');
    editButtonEl.classList.add('btn', 'btn-success', 'btn-item-btn-edit');
    editButtonEl.textContent = 'edit';

    const deleteButtonEl = document.createElement('button');
    deleteButtonEl.classList.add('btn', 'btn-danger', 'btn-item-btn-delete');
    deleteButtonEl.textContent = 'delete';
    deleteButtonEl.addEventListener('click', deleteTodoItem);

    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');
    listItem.append(checkBoxEl, titleEl, editInputEl, editButtonEl, deleteButtonEl);
    return listItem;
}

function toggleTodoItem(event) {
    const listItem = event.target.parentElement;
    listItem.classList.toggle('completed');
}

function deleteTodoItem (event) {
    const listItem = event.target.parentElement;
    listItem.remove();
}

function editTodoItem(event) {

}