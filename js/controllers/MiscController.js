module.exports = function (app) {
    app.controller('MiscController', ['$scope', '$http', '$location', 'newItemService', function ($scope, $http, $location, newItemService) {
     console.log("this is the misc page");
     $scope.miscs = newItemService.getMISCSitems();

     newItemService.getMISCSitems().then(function(misc){
       console.log(misc.data);
       $scope.misc = misc.data;
     });

    }]);
}
