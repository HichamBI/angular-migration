import TodoController from "./controllers/TodoController";
import '../style/app.css';
import 'angular-route'
import TodoService from "./services/TodoService";

let app = () : any => {
    return {
        templateUrl: './todo-list.html',
        controller: 'TodoController',
        controllerAs: 'TodoController'
    }
};

let appModule  = angular.module('app', ['ngRoute'])
    .directive('app', app)
    .controller('TodoController', TodoController)
    .service('todoService', TodoService);

appModule.config(($routeProvider: angular.route.IRouteProvider) => {
    $routeProvider
        .when('/', {controller:TodoController, templateUrl:'./todo-list.html'});
    });

export default appModule;
