/**
 * This is my To Do List Controller, where I´ll put
 * all my controller functions. 
 *
 * Maurício, Brayan, Julio, Gabriel and everyone, look at http://en.wikipedia.org/wiki/JSDoc. 
 * Is better for our project (this :-]) use JSDoc pattern to document all stuff.
 * 01/03/2015 - 19:12
 * 
 * @author Lucas Caixeta
 * @param {$scope} scope is an object that refers to the application model.
 */
function TodoCtrl($scope) {
    'use strict';
    
    /*
    * Create my first two 'To Do´s'.
    * Done: for checkbox, if true, checkbox will be checked.
    * text: my todo description.
    */
    $scope.todos = [
        {done: false, text: 'first'},
        {done: false, text: 'second'}
    ];

    /*
    * Add a new ToDo after submit form, very simple and fun :)
    */
    $scope.addTodo = function () {
        var newTodo = {
            done: false,
            text: $scope.todoText
        };
        
        $scope.todos.push(newTodo);
    };
}