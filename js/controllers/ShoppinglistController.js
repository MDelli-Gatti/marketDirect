module.exports = function (app) {
    app.controller('ShoppinglistController', ['$scope', '$http', '$location','ShoppinglistService', function ($scope, $http, $location, ShoppinglistService) {
  console.log("hey bro whats up?")
      $scope.ShopItems = ShoppinglistService.getSLItems();
    }]);


}
