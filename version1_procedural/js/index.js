const todoForm = document.querySelector('#form');
const formInput = document.querySelector('#form-input');
const todoList = document.querySelector('#todo-list');

todoForm.addEventListener('submit', addTodoItem);

function addTodoItem(event) {
    event.preventDefault();

    const title = formInput.value;

    if(title.trim() === '') {
        alert('You need to enter valid toto title');

        return;
    }

    const todoItem = createTodoItem(title);
    todoList.append(todoItem);

    formInput.value = '';
}

function createTodoItem(title) {
    //create checkbox
    const checkBoxEl = createCheckbox([{event: 'change', handler: toggleTodoItem}]);

    //create title
    const titleEl = createTitle(title);

    //edit input
    const editInputEl = createEditInput();

    //edit
    const editButtonEl = createEditButton([{event: 'click', handler: editTodoItem}]);

    //delete
    const deleteButtonEl = createDeleteButton([{event: 'click', handler: deleteTodoItem}]);

    return createListItem([checkBoxEl, titleEl, editInputEl, editButtonEl, deleteButtonEl]);
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
    const listItem = event.target.parentElement;
    const titleEl = listItem.querySelector('.todo-title');
    const editInputEl = listItem.querySelector('.todo-input');
    const isEditing = listItem.classList.contains('editing');

    if(isEditing) {
        titleEl.textContent = editInputEl.value;
        event.target.textContent = 'Edit';
    } else {
        editInputEl.value = titleEl.textContent;
        event.target.textContent = 'Save';
    }

    listItem.classList.toggle('editing');
}