module.exports=function(app){
app.factory('ShoppinglistService', ['$http', function ($http) {
    let shoppinglistItems = [];

    return {
        /* GET request for book list */
        // getSLItems: function () {
        //   var promise = $http({
        //         method: 'GET',
        //         url: 'get-items'
        //     }).success(function (response) {
        //         console.log(response);
        //         return response;
        //         // angular.copy(response., slItems);
        //     }).error(function (response) {
        //        return {"status": false};
        //     });
        //
        //     return promise;
        // },
        // borrowBook: function (target) {
        //  console.log("borrowing diz")
        //  $http({
        //    method: "POST",
        //    url: "http://10.1.10.215:7000/library/borrow/" + target.id
        //  }).then(function(response){
        //    console.log(response)
        //    angular.copy(response.data.books,allBooks);
        //
        //  })

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
