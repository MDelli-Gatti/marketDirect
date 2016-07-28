module.exports = function (app) {
    app.controller('ProfileController', ['$scope', '$http', '$location', 'newUserService', 'newItemService', function ($scope, $http, $location, newUserService, newItemService) {
      $scope.name = '';
      $scope.password = '';
      $scope.Cat = '';
      $scope.Name = '';
      $scope.Desc = '';
      $scope.Quant = '';
      $scope.Price = '';





      $scope.createUser = function () {
          console.log(`${$scope.name} is a new user`);
          newUserService.userLogin($scope.name, $scope.password);
          $location.path('/explore');
          }
// <<<<<<< HEAD
//           $scope.inventories = function(){
//             console.log("boo");
//             console.log("we have ", $scope.Cat, $scope.Name, $scope.Desc, $scope.Quant, $scope.Price)
//             newItemService.addNEWitems($scope.Cat,$scope.Name,$scope.Desc,$scope.Quant,$scope.Price)
//           }
//
// =======

      //     $scope.inventories = function(){
      //     var f = document.getElementByID('fileupload').files[0],
      //       r = new FileReader();
      //     r.onloaded = function(e){
      //       var data = e.target.result;
      //       console.log("we have ", $scope.Cat, $scope.Name, $scope.Desc, $scope.Quant, $scope.Price)
      //       newItemService.addNEWitems($scope.Cat,$scope.Name,$scope.Desc,$scope.Quant,$scope.Price)
      //     }
      //     r.readAsBinaryString(f);
      // };

    }]);
};
