module.exports = function(app) {
    app.factory('newItemService', ['$http',
        function($http) {
            let shoppinglistItems = [];
            let arts = [];
            let produces = [];
            let handcrafts = [];
            let miscellaneouses = [];
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
                        data: {
                            id: itemId
                        }
                    }).then(function(res) {
                      window.location.reload();
                        console.log("phase two");
                    }).catch(function(response) {
                        console.log('the end of delete',
                            response);
                    })
                },
                getARTitems: function() {
                    var promise = $http({
                        method: 'GET',
                        url: 'items-art',
                    }).success(function(response) {
                        console.log(response);
                        console.log("here we are");
                        // angular.copy(response.data.books,arts);
                    }).error(function(response) {
                        return {
                            "status": false
                        };
                    });
                    return promise;
                },
                getPRODUCEitems: function() {
                    var promise = $http({
                        method: 'GET',
                        url: 'items-produce',
                    }).success(function(response) {
                        console.log(response);
                        console.log("here we are");
                        // angular.copy(response.data.books,arts);
                    }).error(function(response) {
                        return {
                            "status": false
                        };
                    });
                    return promise;
                },
                getHANDCRAFTEDitems: function() {
                    var promise = $http({
                        method: 'GET',
                        url: 'items-hand-crafted',
                    }).success(function(response) {
                        console.log(response);
                        console.log("here we are");
                        // angular.copy(response.data.books,arts);
                    }).error(function(response) {
                        return {
                            "status": false
                        };
                    });
                    return promise;
                },
                getMISCSitems: function() {
                    var promise = $http({
                        method: 'GET',
                        url: 'items-misc',
                    }).success(function(response) {
                        console.log(response);
                        console.log(
                            "we are getting miscsssss"
                        );
                        // angular.copy(response.data.books,arts);
                    }).error(function(response) {
                        return {
                            "status": false
                        };
                    });
                    return promise;
                },

                addToshoplist: function(Shopitem) {
                    console.log("phase one:")
                    // var itemId = Shopitem.id;

                    var promise = $http({
                        method: 'POST',
                        url: 'add-shopping-list-item/' + Shopitem.id,

                    }).then(function(res) {
                      console.log(response)
                    angular.copy(response.data.Shopitem);
                    });
                    // return promise;
                },
            }
        }
    ]);
};
