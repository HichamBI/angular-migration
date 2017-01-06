export default class TodoController {

    constructor($scope : any, filterFilter: any, todoService: any) {
        $scope.todos = todoService.getAllTodos();

        $scope.$watch('todos', () => {
            $scope.remaining = filterFilter($scope.todos, {completed : false}).length;
            $scope.allTask = $scope.todos.length;
            $scope.allchecked = !$scope.remaining;
        }, true);

        $scope.removeTodo = (index: any) => {
            todoService.removeTodo(index);
        };

        $scope.addTodo = () => {
            todoService.addTodo(
                {
                    name : $scope.newTodo,
                    completed : false
                }
            );
            $scope.newTodo = '';
        };

        $scope.editTodo = (todo: any) => {
            todo.editing = false;
        };

        $scope.checkAllTodos = (allchecked: any) => {
            $scope.todos.forEach((todo: any) => todo.completed = allchecked);
        }
    }
}