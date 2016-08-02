module.exports = function (app) {
    app.controller('ArtController', ['$scope', '$http', '$location', 'newItemService', 'shoppingListService' function ($scope, $http, $location, newItemService, shoppingListService) {
     console.log("this is the art page");
     $scope.arts = newItemService.getARTitems();

     newItemService.getARTitems().then(function(art){
       console.log(art.data);
       $scope.arts = art.data;
     });

     $scope.addtoSL = function(target){
     console.log(target)
     shoppingListService.postToSL(target)
   }
    }]);
}
