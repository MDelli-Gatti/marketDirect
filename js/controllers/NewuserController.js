module.exports = function (app) {
    app.controller('NewUserController', ['$scope', '$http', '$location', 'newUserService', function ($scope, $http, $location, newUserService) {
      $scope.name = '';
      $scope.password = '';

      $scope.createUser = function () {
          console.log(`${$scope.name} is a new user`);
          newUserService.userLogin($scope.name, $scope.password, "/explore");
          alert ("Thanks for creating an account")
          // $location.path('/explore');
      };

    }]);
};
