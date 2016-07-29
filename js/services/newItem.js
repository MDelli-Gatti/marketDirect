module.exports = function(app) {
    app.factory('newItemService', ['$http',
        function($http) {
            let shoppinglistItems = [];
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
                        $scope.ShopItem.splice(index, 1);
                    }).catch(function(response) {
                        console.log('the end of delete',
                            response);
                    })
                }
            }
        }
    ]);
};
