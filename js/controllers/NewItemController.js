module.exports = function (app) {
    app.controller('NewitemController', ['$scope', '$http', '$location', 'newItemService', function ($scope, $http, $location, loginService,newItemService) {
      $scope.inventories = function(){
        console.log("we have + $scope.Cat,$scope.Name,$scope.Desc,$scope.Quant,$scope.Price")
        service.addSLItems($scope.Cat,$scope.Name,$scope.Desc,$scope.Quant,$scope.Price)
      }
    }]);
}
