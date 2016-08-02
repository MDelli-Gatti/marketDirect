module.exports = function (app) {
    app.controller('ArtController', ['$scope', '$http', '$location', 'newItemService', 'shoppingListService', function ($scope, $http, $location, newItemService, shoppingListService) {
     console.log("this is the art page");
     $scope.arts = newItemService.getARTitems();

     newItemService.getARTitems().then(function(art){
       console.log(art.data);
       $scope.arts = art.data;
     });
     $scope.add = function(ShopItem) {
             newItemService.addToshoplist(ShopItem)
             console.log(ShopItem);
            //  var index = $scope.art.indexOf(ShopItem);
            //  $scope.art.splice(index, 1);
         },
      $scope.addtoSL = function(Item){
      console.log(Item);
      shoppingListService.postToSL(Item);
    };



     }]);
    };
