angular.module('listController', []).controller('listController', function($scope, $http) {
	$scope.items = [];
	$scope.addItem = function(item){
		var index = itemIndex(item);

		if( index == -1){
	     	$http({
				  method: 'POST',
				  url: '/grocery-list/add_item/' + item
				}).then(function successCallback(response) {
					$scope.updateList();
				  }, function errorCallback(response) {
				  	console.log(response);
				  });
		}else{
			$scope.incQuantity(item);
		}
	};

	$scope.incQuantity = function(item){
		$http.post('/grocery-list/update_item/' + item + '/inc').then(function(response) {
				$scope.updateList();
	    });
	}

	$scope.decQuantity = function(item){
		$http.post('/grocery-list/update_item/' + item + '/dec').then(function(response) {
				$scope.updateList();
	    });

	}

	$scope.updateList = function(){
		console.log("hey there");
		$http.post('/grocery-list/fetchList').then(function(response){
			$scope.items = response.data;
		});
	}

	$scope.updateList();
	var itemIndex = function(name){
		for(var i = 0; i < $scope.items.length; i++){
			if ($scope.items[i][0] == name){
				return i;
			}
		}
		return -1;
	};
	
});
