angular.module('listController', []).controller('listController', function($scope, $http) {
	$scope.items = [];
	$scope.addItem = function(){
		var index = itemIndex($scope.item_to_add);

		if( index == -1){
	     	$http({
				  method: 'POST',
				  url: './grocery-list/add_item/' + $scope.item_to_add
				}).then(function successCallback(response) {
					$scope.items.push([$scope.item_to_add, 1]);
				  }, function errorCallback(response) {
				  	console.log(response);
				  });
		}else{
			$http.post('./grocery-list/update_item/' + $scope.item_to_add).then(function(response) {
				$scope.items[index][1] += 1;
	    	});
		}
	};

	var itemIndex = function(name){
		for(var i = 0; i < $scope.items.length; i++){
			if ($scope.items[i][0] == name){
				return i;
			}
		}
		return -1;
	};
	
});
