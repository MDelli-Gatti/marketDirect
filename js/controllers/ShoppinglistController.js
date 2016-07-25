let nugget = angular.module('MarketControllers');

nugget.controller('AvailableController', ['$scope', 'ShoppingListService', function ($scope, ShoppingListService) {
    // Get some booooooookie crisp
    $scope.slItems = ShoppingListService.getSLItems();
}]);

// module.exports = function (app) {
//     app.controller('ShoppinglisteController', ['$scope', '$http', '$location', 'loginService', function ($scope, $http, $location, loginService) {
//
//
//         // $scope.login = function () {
//         //     console.log(`${$scope.name} in as we speak`);
//         //     loginService.userLogin($scope.name, $scope.password);
//         //     $location.path('/explore');
//         // };
//     }]);
// }
