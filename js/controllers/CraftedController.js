module.exports = function (app) {
    app.controller('CraftedController', ['$scope', '$http', '$location', 'newItemService', function ($scope, $http, $location, newItemService) {
     console.log("this is the handcrafted page");
     $scope.handcrafts = newItemService.getHANDCRAFTEDitems();

     newItemService.getHANDCRAFTEDitems().then(function(handcraft){
       console.log(handcraft.data);
       $scope.handcrafts = handcraft.data;
     });

    }]);
}
