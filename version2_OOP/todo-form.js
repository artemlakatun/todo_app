class TodoForm {

    constructor(element) {
        this.element = element;
        this.formInput = null;
        this.onSubmit = null;
    }

    initialize() {
        this.formInput = this.element.querySelector('#form-input');
        this.element.addEventListener('submit', this.handleSubmit.bind(this));
    }

    handleSubmit(event) {
        event.preventDefault();
        const title = this.formInput.value;

        if(this.checkInputValue(title)) {
            alert('You need to enter valid toto title');

            return;
        }
        this.onSubmit(title);

        this.formInput = '';
    }

    checkInputValue(value) {
        return value.trim() !== '';
    }
}