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

function createCheckbox (handlers) {
    return createElement({
        tag: 'input',
        classList: ['checkbox'],
        attributes: [{prop: 'type', value: 'checkbox'}],
        handlers,
    });
}

function createTitle (title) {
    return createElement({
        tag: 'label',
        classList: ['todo-title'],
        textContent: title,
    });
}

function createEditInput () {
    return createElement({
        tag: 'input',
        classList: ['form-control', 'todo-input'],
        textContent: '',
    });
}

function createEditButton (handlers) {
    return createElement({
        tag: 'button',
        classList: ['btn', 'btn-success', 'btn-item-btn-edit'],
        textContent: 'Edit',
        handlers,
    });
}

function createDeleteButton (handlers) {
    return createElement({
        tag: 'button',
        classList: ['btn', 'btn-danger', 'btn-item-btn-delete'],
        textContent: 'Delete',
        handlers,
    });
}

function  createListItem (children) {
    return createElement({
        tag: 'li',
        classList: ['todo-item'],
        children,
        childrenActions: 'append',
    });
}

function createElement (
    {
        tag,
        classList,
        attributes,
        textContent,
        handlers,
        children,
        childrenActions

    }) {
    const element = document.createElement(tag);

    if(classList?.length) {
        element.classList.add(...classList);
    }

    if(attributes?.length) {
        attributes.forEach(({prop, value}) => {
            element.setAttribute(prop, value);
        })
    }

    if (textContent) {
        element.textContent = textContent;
    }

    if(handlers?.length) {
        handlers.forEach(({event, handler}) => {
            element.addEventListener(event, handler);
        })
    }

    if(children?.length) {
        element[childrenActions](...children);
    }

    return element;
}