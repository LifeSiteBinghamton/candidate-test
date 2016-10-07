// routing ====================================================
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
            .when('/routes',{
            	templateUrl: 'views/todo.html',

            });
	}]);
