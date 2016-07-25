let current = angular.module('MarketApp');

current.factory('ShoppinglistService', ['$http', function ($http) {
    let shoppinglistItems = [];

    return {
        /* GET request for book list */
        getSLItems: function () {
            $http({
                method: 'GET',
                url: 'get-items'
            }).then(function (response) {
                console.log(response);
                // angular.copy(response., slItems);
            });

            return shoppinglistItems;
        },
        // /* POST request to update one book */
        // borrowBook: function (book) {
        //
        // },
        // /* POST request to update one book */
        // returnBook: function (book) {
        //
        // },
    };
}]);

// testing
