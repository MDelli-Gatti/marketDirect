module.exports = function (app) {
    app.controller('ProduceController', ['$scope', '$http', '$location', 'newItemService', function ($scope, $http, $location, newItemService) {
     console.log("this is the produce page");
     $scope.produces = newItemService.getPRODUCEitems();

     newItemService.getPRODUCEitems().then(function(produce){
       console.log(produce.data);
       $scope.produces = produce.data;
     });

    }]);
}
