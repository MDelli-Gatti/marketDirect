module.exports = function (app) {
    app.controller('ProduceController', ['$scope', '$http', '$location', 'newItemService', function ($scope, $http, $location, newItemService) {
     console.log("this is the produce page");
     $scope.produces = newItemService.getPRODUCEitems();

     newItemService.getPRODUCEitems().then(function(produce){
       console.log(produce.data);
       $scope.produces = produce.data;
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
