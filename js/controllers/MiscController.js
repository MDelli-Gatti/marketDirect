module.exports = function (app) {
    app.controller('MiscController', ['$scope', '$http', '$location', 'newItemService', function ($scope, $http, $location, newItemService) {
     console.log("this is the miscellanous page");
     $scope.misc = newItemService.getMISCELLANOUSitems();
    }]);
}
