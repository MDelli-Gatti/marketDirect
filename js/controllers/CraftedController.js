module.exports = function (app) {
    app.controller('CraftedController', ['$scope', '$http', '$location', 'newItemService', 'shoppingListService', function ($scope, $http, $location, newItemService, shoppingListService) {
     console.log("this is the handcrafted page");
     $scope.handcrafts = newItemService.getHANDCRAFTEDitems();

     newItemService.getHANDCRAFTEDitems().then(function(handcraft){
       console.log(handcraft.data);
       $scope.handcrafts = handcraft.data;
     });
     $scope.add = function(ShopItem) {
             newItemService.addToshoplist(ShopItem)
             console.log(ShopItem);
            //  var index = $scope.art.indexOf(ShopItem);
            //  $scope.art.splice(index, 1);
         },
      $scope.addtoSL = function(item){
      console.log("add to SL is working", item);
      shoppingListService.postToSL(item);
    };

    }]);
}
