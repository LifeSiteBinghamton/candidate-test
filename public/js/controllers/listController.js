angular.module('listController', []).controller('listController', function($scope, $http) {
	$scope.items = [];
	$scope.addItem = function(item){
		var index = itemIndex(item);

		if( index == -1){
	     	$http({
				  method: 'POST',
				  url: './grocery-list/add_item/' + item
				}).then(function successCallback(response) {
					$scope.items.push([item, 1]);
				  }, function errorCallback(response) {
				  	console.log(response);
				  });
		}else{
			$scope.incQuantity(item);
		}
	};

	$scope.incQuantity = function(item){
		var index = itemIndex(item);
		$http.post('./grocery-list/update_item/' + item + '/inc').then(function(response) {
				console.log(response);
				$scope.items[index][1] += 1;
	    });
	}

	$scope.decQuantity = function(item){
		var index = itemIndex(item);
		$http.post('./grocery-list/update_item/' + item + '/dec').then(function(response) {
				if($scope.items[index][1] > 1) $scope.items[index][1] -= 1;
	    });

	}

	var itemIndex = function(name){
		for(var i = 0; i < $scope.items.length; i++){
			if ($scope.items[i][0] == name){
				return i;
			}
		}
		return -1;
	};
	
});
