angular.module('listController', []).controller('listController', function($scope, $http) {
	$scope.items = [];
	$scope.addItem = function(item, quantity){
		var index = itemIndex(item);
		if(quantity == undefined){
			quantity = 1;
		}
		if( index == -1){

	     	$http({
				  method: 'POST',
				  url: '/grocery-list/add_item/' + item + '/' + quantity
				}).then(function successCallback(response) {
					$scope.updateList();
				  }, function errorCallback(response) {
				  	console.log(response);
				  });
		}else{
			$scope.incQuantity(item, quantity);
		}
	};

	$scope.incQuantity = function(item, quantity){
		$http.post('/grocery-list/update_item/' + item + '/inc/' + quantity).then(function(response) {
			$scope.updateList();
	    });
	}

	$scope.decQuantity = function(item){
		$http.post('/grocery-list/update_item/' + item + '/dec/1').then(function(response) {
			$scope.updateList();
	    });

	}

	$scope.removeItem = function(item){
		$http.post('/grocery-list/remove_item/' + item).then(function(response){
		});
		$scope.updateList();
	}

	$scope.removeList = function(){
		$http.post('/grocery-list/remove_item/deleteAll' ).then(function(response){
			console.log(response);
		});
		$scope.updateList();
	}

	$scope.updateList = function(){
		$http.post('/grocery-list/fetchList').then(function(response){
			$scope.items = response.data;
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
	$scope.updateList();
});
