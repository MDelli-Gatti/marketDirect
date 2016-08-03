module.exports = function(app) {
    app.controller('ShoppinglistController', ['$scope', '$http', '$location', 'shoppingListService', function($scope, $http, $location, shoppingListService) {
        $scope.ShopItems = '';

        console.log("Shopping List Controller is working")
        shoppingListService.getSLItems().then(function(items) {
            console.log(items.data);
            $scope.ShopItems = items.data;
        });
        $scope.check = function(ShopItem) {
            shoppingListService.DeleteSLItems(ShopItem)
            console.log(ShopItem);
            var index = $scope.ShopItem.indexOf(ShopItem);
            $scope.ShopItem.splice(index, 1);
        }
    }]);


}
