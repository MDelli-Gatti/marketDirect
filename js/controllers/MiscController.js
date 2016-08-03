module.exports = function (app) {
    app.controller('MiscController', ['$scope', '$http', '$location', 'newItemService', 'shoppingListService', function ($scope, $http, $location, newItemService, shoppingListService) {
     console.log("this is the misc page");
     $scope.miscs = newItemService.getMISCSitems();

     newItemService.getMISCSitems().then(function(misc){
       console.log(misc.data);
       $scope.misc = misc.data;
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
};
