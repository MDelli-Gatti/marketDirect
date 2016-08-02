module.exports=function(app){
app.factory('shoppingListService', ['$http', function ($http) {
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
        postToSL: function (item) {
         console.log("post to SL string", item)
         $http({
           method: "POST",
           url: "add-shopping-list-item/" + item.id
         }).then(function(response){
           console.log(response)
          //  angular.copy(response.data.books,allBooks);

         })

        /* POST request to update one book */
        // borrowBook: function (book) {
        //
        // },
        /* POST request to update one book */
        // returnBook: function (book) {
        //
        // },
        }
    };
}]);
};
// testing
