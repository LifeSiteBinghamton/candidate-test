angular.module('listController', []).controller('listController', function($scope) {
	$scope.items = []
	$scope.addItem = function(){
		$scope.items.push($scope.item_to_add)
		console.log($scope.items)
	};

	
});
