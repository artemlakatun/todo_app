class TodoItem {
    constructor(todoText, onDelete) {
        this.element = null;
        this.todoText = todoText;
        this.editing = false;
        this.onDelete = onDelete;

        this.handleToggle = this.handleToggle.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.initialize();
    }

    initialize() {
        this.checkbox = DomHelper.createCheckbox([{event: 'change', handler: this.handleToggle}]);
        //create title
        this.title = DomHelper.createTitle(this.todoText);

        //edit input
        this.editInput = DomHelper.createEditInput(this.todoText);

        //edit
        this.editButton = DomHelper.createEditButton([{event: 'click', handler: this.handleEdit}]);

        //delete
        this.deleteButton = DomHelper.createDeleteButton([{event: 'click', handler: this.handleDelete}]);

        this.element = DomHelper.createListItem([this.checkbox, this.title, this.editInput, this.editButton, this.deleteButton]);
    }

    handleToggle () {
        this.#toggle();
    }

    handleEdit () {
        this.#edit();
    }

    handleDelete() {
        this.onDelete(this);
    }

    destroy() {
        this.checkbox.removeEventListener('change', this.handleToggle);
        this.editButton.removeEventListener('click', this.handleEdit);
        this.deleteButton.removeEventListener('click', this.deleteButton,this.handleDelete);
    }

    #edit () {
        if(this.editing) {
            this.editing = false;
            this.title.textContent = this.editInput.value;
            this.editButton.textContent = 'Edit';
            this.element.classList.remove('editing');
        } else {
            this.editing = true;
            this.editInput.value = this.title.textContent;
            this.editButton.textContent = 'Save';
            this.element.classList.add('editing');
        }
    }

    #toggle () {
        this.element.classList.toggle('completed');
    }
}