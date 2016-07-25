let current = angular.module('MarketServices');

current.factory('ShoppingListService', ['$http', function ($http) {
    let shoppinglistItems = [];

    return {
        /* GET request for book list */
        getSLItems: function () {
            $http({
                method: 'get',
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
