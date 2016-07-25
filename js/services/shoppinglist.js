module.exports=function(app){
app.factory('ShoppinglistService', ['$http', function ($http) {
    let shoppinglistItems = [];

    return {
        /* GET request for book list */
        getSLItems: function () {
          var promise = $http({
                method: 'GET',
                url: 'get-items'
            }).then(function (response) {
                console.log(response.data);
                // angular.copy(response., slItems);
            });

            return promise;
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
}
// testing
