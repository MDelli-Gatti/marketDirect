module.exports = function (app) {
    app.controller('LoginController', ['$scope', '$http', '$location', 'loginService', function ($scope, $http, $location, loginService) {
        $scope.name = '';
        $scope.password = '';

        $scope.login = function () {
            console.log(`${$scope.name} in as we speak`);
            loginService.userLogin($scope.name, $scope.password, "/explore");
            $location.path('/explore');

            app.directive('iframeDirective', ['$sce', function($sce) {
                 return {
                   restrict: 'E',
                   template: '<iframe src="{{ trustedUrl }}" frameborder="0" allowfullscreen></iframe>',
                   link: function(scope) {
                     scope.trustedUrl = $sce.trustAsResourceUrl("");
                   }
                 }
               }]);


        };
    }]);
}
