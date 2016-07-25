
let app = angular.module('MarketControllers')

module.exports = function (app) {
    app.controller('ShoppinglistController', ['$scope', '$http', '$location','ShoppingListService', function ($scope, $http, $location,ShoppingListService) {
      $scope.ShopItems = ShoppingListService.getSLItems();



    }]);
}
