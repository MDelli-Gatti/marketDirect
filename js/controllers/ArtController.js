module.exports = function (app) {
    app.controller('ArtController', ['$scope', '$http', '$location', 'newItemService', function ($scope, $http, $location, newItemService) {
     console.log("this is the art page");
     $scope.arts = newItemService.getARTitems();

     newItemService.getARTitems().then(function(art){
       console.log(art.data);
       $scope.arts = art.data;
     });

    }]);
}
