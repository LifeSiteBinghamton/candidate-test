angular.module('routes', [])
	.config(['$routeProvider', function ($routeProvider) {
	    $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'WelcomeController'
            })
            .when('/home', {
                templateUrl: 'views/home.html',
                controller: 'WelcomeController'
            })
            .when('/todo',{
            	templateUrl: 'views/todo.html',

            });
	}]);
