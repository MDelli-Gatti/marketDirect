module.exports = function (app) {
    app.controller('VideoController', ['$scope', '$http', '$location', 'loginService', function ($scope, $http, $location, loginService) {

      $scope.theBestVideo = 'sMKoNBRZM1M';

        // $scope.login = function () {
        //     console.log(`${$scope.name} in as we speak`);
        //     loginService.userLogin($scope.name, $scope.password);
        //     $location.path('/explore');
        // };
    }]);
}
