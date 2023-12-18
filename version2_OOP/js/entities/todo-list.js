class TodoList {

    constructor(element) {
        this.element = element;

        this.remove = this.remove.bind(this);
    }

    add(title) {
        const todoItemElement = this.#createTodoItem(title);
        this.element.append(todoItemElement);
    }

    remove(todoItem) {
        this.element.removeChild(todoItem.element);
        todoItem.destroy();
        todoItem = null;
    }

    #createTodoItem(title) {
        const todoItem = new TodoItem(title, this.remove);
        return todoItem.element;
    }
}