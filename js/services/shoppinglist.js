let current = angular.module('MarketServices');

current.factory('ShoppingListService', ['$http', function ($http) {
    let slItems = [];

    return {
        /* GET request for book list */
        getSLItems: function () {
            $http({
                method: 'get',
                url: 'add-shopping-list-item'
            }).then(function (response) {
                console.table(response.data.books);

                angular.copy(response.data.books, books);
            });

            return books;
        },
        /* POST request to update one book */
        borrowBook: function (book) {

        },
        /* POST request to update one book */
        returnBook: function (book) {

        },
    };
}]);

// testing
