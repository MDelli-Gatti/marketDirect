module.exports = function (app) {
    app.controller('ShoppinglistController', ['$scope', '$http', '$location','ShoppinglistService', function ($scope, $http, $location, ShoppinglistService) {
  console.log("hey bro whats up?")
       ShoppinglistService.getSLItems().then(function(items){
         console.log(items.data);
         $scope.ShopItems = items.data;
       });
    }]);


}
/////Scope.Inventories is in the profile controller////
