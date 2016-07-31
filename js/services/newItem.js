module.exports = function(app) {
    app.factory('newItemService', ['$http',
        function($http) {
            let shoppinglistItems = [];
            let arts = [];
            let produces = [];
            let handcrafts = [];
            let misc = [];
            // $scope.Cat = '';
            // $scope.Name = '';
            // $scope.Desc = '';
            // $scope.Quant = '';
            // $scope.Price = '';
            return {
                addNEWitems: function() {
                    console.log("sending diz")
                    $http({
                        method: 'POST',
                        url: "create-item"
                    }).then(function(response) {
                        console.log("we created" +
                            response);
                        return response;
                    });
                    console.log("the end")
                },
                getSLItems: function() {
                    var promise = $http({
                        method: 'GET',
                        url: 'get-items'
                    }).success(function(response) {
                        console.log(response);
                        return response;
                        // angular.copy(response., slItems);
                    }).error(function(response) {
                        return {
                            "status": false
                        };
                    });
                    return promise;
                },
                DeleteSLItems: function(ShopItem) {
                    console.log(ShopItem);
                    var gone = {
                        id: ShopItem.id,
                        name: ShopItem.name,
                        description: ShopItem.description,
                        category: ShopItem.category,
                    }

                    var itemId = ShopItem.id;

                    console.log("phase one:", itemId)
                    return $http({
                        method: 'POST',
                        url: 'delete-item/',
                        data: {id: itemId}
                    }).then(function(res) {
                        console.log("phase two");
                    }).catch(function(response) {
                        console.log('the end of delete',
                            response);
                    })
                },

               getARTitems: function(){
                    return $http({
                   method: 'GET',
                   url: 'items-art'
                 }).then(function success(response){
                    console.log(response);
                    angular.copy(response.data.books,arts);
                 })
                //  return newthing;

              },

               getPRODUCEitems: function(){
                    return $http({
                   method: 'GET',
                   url: 'items-produce'
                 }).then(function success(response){
                    console.log(response);
                    angular.copy(response.data.books,produces);
                 })
                //  return newthing;

              },

              getHANDCRAFTEDitems: function(){
                   return $http({
                  method: 'GET',
                  url: 'items-hand-crafted'
                }).then(function success(response){
                   console.log(response);
                   angular.copy(response.data.books,handcrafts);
                })
               //  return newthing;

             },

             getMISCELLANOUSitems: function(){
                  return $http({
                 method: 'GET',
                 url: 'items-miscellanous'
               }).then(function success(response){
                  console.log(response);
                  angular.copy(response.data.books,misc);
               })
              //  return newthing;

            },












            }
        }
    ]);
};
