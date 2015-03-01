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
    * Create my first two 'To Do´s' (initialize list of todos).
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
        /*
        * Weel, it say´s how will be my new item. It´ll start unchecked and with 
        * my todoText as it´s value.
        */
        var newTodo = {
            done: false,
            text: $scope.todoText
        };

        //In fact, this line push a newTodo on my 'To Do list' ;-)
        $scope.todos.push(newTodo);

        // Clear the input of new 'to do item' after submit. (Cool!)
        $scope.todoText = '';
    };

    // Remove a todo item
    $scope.removeTodo = function (start) {
        /*
        * 'splice' in javascript receive a start position and the number of elements to remove.
        * We´ll aways delete one, becouse we have only one item in each line.
        */
        $scope.todos.splice(start, 1);
    };

    // Function to move an item
    $scope.move = function (index, direction) {

        // Handle moving up
        if (direction === 'up') {
            if (index === 0) {
                return;
            }
            index = index - 1;
        }
        
        // Handle moving down
        if (direction === 'down') {
            if (index === $scope.todos.length - 1) {
                return;
            }
        }

        var todo = $scope.todos[index];
        /**
        * index + 2 = my item destination.
        * 0 = number of items that I want to remove, anything.
        * todo = my item, to add on destination.
        */
        $scope.todos.splice(index + 2, 0, todo);
        $scope.todos.splice(index, 1);

    };
}