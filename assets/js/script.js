var app = angular.module('appPuzzle', []);
app.controller('displayContent', function($scope, $http) {
  $http.get('assets/js/puzzle.json').then(function(response) {
    $scope.puzzles = response.data;
  });
  $scope.changeCategory = function(category) {
    $scope.filterCategory = category;
  };
    $scope.changeOrder = function(order) {
      $scope.orderby = order;
  };
  $scope.quantityBasket = {};
  $scope.addBasket = function(add) {
    var id = add;
    if(!(id in $scope.quantityBasket)){
      $scope.quantityBasket[id] = 1;
    }else{
      $scope.quantityBasket[id]++;
    }
  }
  $scope.totalPriceItems = function() {
  var totalPriceItems = 0;
  angular.forEach($scope.quantityBasket, function(value, key) {
    totalPriceItems += $scope.puzzles[key].price * value;
  })
    return totalPriceItems;
  }

  $scope.totalQtyKeyBasket = function() {
  var totalQtyKeyBasket = 0;
  angular.forEach($scope.quantityBasket, function(value, key) {
    totalQtyKeyBasket += $scope.quantityBasket[key];
  })
    return totalQtyKeyBasket;
  }

  $scope.removeItem = function(index) {
     	delete $scope.quantityBasket[index];
  }
  $scope.addQty = function(key) {
     $scope.quantityBasket[key]++;
  }
  $scope.lessQty = function(key) {
     	$scope.quantityBasket[key]--;
      if($scope.quantityBasket[key] == 0){
        delete $scope.quantityBasket[key];
      }
  }
  $scope.delBasket = function() {
        delete $scope.quantityBasket;
        $scope.quantityBasket = {};
      }
});
$(document).ready(function () {
    $('#changeCategoryList li').click(function() {
        $('.activeCategory').removeClass('activeCategory');
         $(this).addClass('activeCategory');
    });
});
