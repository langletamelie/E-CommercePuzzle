var app = angular.module('appPuzzle', []);
app.controller('displayContent', function($scope, $http) {
  $http.get('assets/js/puzzle.json').then(function(response) {
      $scope.puzzles = response.data;
  });
});
