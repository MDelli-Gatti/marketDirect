module.exports = function (app) {
    app.controller('ShoppinglistController', ['$scope', '$http', '$location','shoppingListService', function ($scope, $http, $location, shoppingListService) {
  console.log("hey bro whats up?")
       shoppingListService.getSLItems().then(function(items){
         console.log(items.data);
         $scope.ShopItems = items.data;
       });
    }]);


}
