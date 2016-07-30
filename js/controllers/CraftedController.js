module.exports = function (app) {
    app.controller('CraftedController', ['$scope', '$http', '$location', 'newItemService', function ($scope, $http, $location, newItemService) {
     console.log("this is the hand-crafted page");
     $scope.handcrafts = newItemService.getHANDCRAFTEDitems();
    }]);
}
