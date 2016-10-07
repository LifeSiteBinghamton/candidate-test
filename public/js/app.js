var app = angular.module('LifeSiteCandidateApp', [
    'ngRoute',
    'routes',
    'WelcomeController'
]);

var module = app.controller('mainController', [ '$scope', '$http', 'Todos', function($scope, $http, Todos) {
    $scope.formData = {};
    Todos.get()
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {
        $http.post('/routes', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        $http.delete('/routes/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}]);

// defined Todos function ===================================
module.factory('Todos', ['$http',function($http) {
	return {
		get : function() {
			return $http.get('/routes');
		}
	}
}]);