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