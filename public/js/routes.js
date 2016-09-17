angular.module('routes', [])
	.config(['$routeProvider', function ($routeProvider) {
	    $routeProvider
            .when('/home', {
                templateUrl: 'views/home.html',
                controller: 'WelcomeController'
            })
            .when('/supermarket', {
            	templateUrl: 'views/market.html',
            	controller: 'listController'
            });
	}]);
