export default class TodoService {
    todos : any [];

    constructor() {
        this.todos = [
            {
                name: 'non completed Task',
                completed: false
            },
            {
                name: 'Completed Task',
                completed: true
            }
        ];

    }

    getAllTodos() {
        return this.todos;
    }

    addTodo(newTodo : any) {
        this.todos.push(newTodo)
    }

    removeTodo(index : any) {
        this.todos.splice(index, 1);
    }
}