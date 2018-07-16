var app = angular.module('appPuzzle', []);
app.controller('displayContent', function($scope, $http) {
  $http.get('assets/js/puzzle.json').then(function(response) {
    $scope.puzzles = response.data;
  });
  $scope.changeCategory = function(category) {
    $scope.filterChange = category;
  };
    $scope.changeOrder = function(order) {
      $scope.orderby = order;
  };
  var quantityBasket = [];
  $scope.addBasket = function(add) {
    var id = add;
    if(!(id in quantityBasket)){
      quantityBasket[id] = 1;
    }else{
      quantityBasket[id]++;
    }
  }
});
