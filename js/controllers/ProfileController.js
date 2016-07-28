module.exports = function (app) {
    app.controller('ProfileController', ['$scope', '$http', '$location', 'newUserService', 'newItemService', function ($scope, $http, $location, newUserService, newItemService) {
      $scope.name = '';
      $scope.password = '';
      console.log("hey bro whats up?")
           newItemService.getSLItems().then(function(items){
             console.log(items.data);
             $scope.ShopItems = items.data;
           });





      $scope.createUser = function () {
          console.log(`${$scope.name} is a new user`);
          newUserService.userLogin($scope.name, $scope.password);
          $location.path('/explore');
          }

          $scope.inventories = function(){
            console.log("boo");
            console.log("we have ", $scope.Cat, $scope.Name, $scope.Desc, $scope.Quant, $scope.Price)
            newItemService.addNEWitems($scope.Cat,$scope.Name,$scope.Desc,$scope.Quant,$scope.Price)
          }

          $scope.remove=function(idx){
              // $scope.ShopItems.splice($index,1);
              var person_to_delete = $scope.ShopItems[idx];
              
              API.DeletePerson({ id: person_to_delete.id }, function (success) {
              $scope.ShopItems.splice(idx, 1);
               });
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
