(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function (app) {
    app.controller('ArtController', ['$scope', '$http', '$location', 'loginService', function ($scope, $http, $location, loginService) {


      
    }]);
}

},{}],2:[function(require,module,exports){
module.exports = function (app) {
    app.controller('CraftedController', ['$scope', '$http', '$location', 'loginService', function ($scope, $http, $location, loginService) {


      
    }]);
}

},{}],3:[function(require,module,exports){
module.exports = function (app) {
    app.controller('ExploreController', ['$scope', '$http', '$location', 'loginService', function ($scope, $http, $location, loginService) {


        // $scope.login = function () {
        //     console.log(`${$scope.name} in as we speak`);
        //     loginService.userLogin($scope.name, $scope.password);
        //     $location.path('/explore');
        // };
    }]);
}

},{}],4:[function(require,module,exports){
module.exports = function (app) {
    app.controller('InventoryController', ['$scope', '$http', '$location', 'loginService', function ($scope, $http, $location, loginService) {


        // $scope.login = function () {
        //     console.log(`${$scope.name} in as we speak`);
        //     loginService.userLogin($scope.name, $scope.password);
        //     $location.path('/explore');
        // };
    }]);
}

},{}],5:[function(require,module,exports){
module.exports = function (app) {
    app.controller('LoginController', ['$scope', '$http', '$location', 'loginService', function ($scope, $http, $location, loginService) {
        $scope.name = '';
        $scope.password = '';

        $scope.login = function () {
            console.log(`${$scope.name} in as we speak`);
            loginService.userLogin($scope.name, $scope.password, "/explore");
            $location.path('/explore');
        };
    }]);
}

},{}],6:[function(require,module,exports){
module.exports = function (app) {
    app.controller('MiscController', ['$scope', '$http', '$location', 'loginService', function ($scope, $http, $location, loginService) {



    }]);
}

},{}],7:[function(require,module,exports){
module.exports = function (app) {
    app.controller('NewitemController', ['$scope', '$http', '$location', 'newItemService', function ($scope, $http, $location, loginService, newItemService) {
      
    }]);
}

},{}],8:[function(require,module,exports){
module.exports = function (app) {
    app.controller('NewUserController', ['$scope', '$http', '$location', 'newUserService', function ($scope, $http, $location, newUserService) {
      $scope.name = '';
      $scope.password = '';

      $scope.createUser = function () {
          console.log(`${$scope.name} is a new user`);
          newUserService.userLogin($scope.name, $scope.password, "/explore");
          alert ("Thanks for creating an account")
          // $location.path('/explore');
      };

    }]);
};

},{}],9:[function(require,module,exports){
module.exports = function (app) {
    app.controller('ProduceController', ['$scope', '$http', '$location', 'loginService', function ($scope, $http, $location, loginService) {

      $scope.login = function () {
          console.log(`${$scope.name} in as we speak`);
          loginService.userLogin($scope.name, $scope.password);
        };

    }]);
}
/////Scope.Inventories is in the profile controller////

},{}],10:[function(require,module,exports){
module.exports = function (app) {
    app.controller('ProfileController', ['$scope', '$http', '$location', 'newUserService', 'newItemService', function ($scope, $http, $location, newUserService, newItemService) {
      $scope.name = '';
      $scope.password = '';
      console.log("hey bro whats up?")
           newItemService.getSLItems().then(function(items){
             console.log(items.data);
             $scope.ShopItems = items.data;
           });





      $scope.createUser = function () {
          console.log(`${$scope.name} is a new user`);
          newUserService.userLogin($scope.name, $scope.password);
          $location.path('/explore');
          }

          $scope.inventories = function(){
            console.log("boo");
            console.log("we have ", $scope.Cat, $scope.Name, $scope.Desc, $scope.Quant, $scope.Price)
            newItemService.addNEWitems($scope.Cat,$scope.Name,$scope.Desc,$scope.Quant,$scope.Price)
          }

          $scope.remove=function(idx){
              // $scope.ShopItems.splice($index,1);
              var person_to_delete = $scope.ShopItems[idx];
              
              API.DeletePerson({ id: person_to_delete.id }, function (success) {
              $scope.ShopItems.splice(idx, 1);
               });
                }






// <<<<<<< HEAD
//           $scope.inventories = function(){
//             console.log("boo");
//             console.log("we have ", $scope.Cat, $scope.Name, $scope.Desc, $scope.Quant, $scope.Price)
//             newItemService.addNEWitems($scope.Cat,$scope.Name,$scope.Desc,$scope.Quant,$scope.Price)
//           }
//
// =======

      //     $scope.inventories = function(){
      //     var f = document.getElementByID('fileupload').files[0],
      //       r = new FileReader();
      //     r.onloaded = function(e){
      //       var data = e.target.result;
      //       console.log("we have ", $scope.Cat, $scope.Name, $scope.Desc, $scope.Quant, $scope.Price)
      //       newItemService.addNEWitems($scope.Cat,$scope.Name,$scope.Desc,$scope.Quant,$scope.Price)
      //     }
      //     r.readAsBinaryString(f);
      // };

    }]);
};

},{}],11:[function(require,module,exports){
module.exports = function (app) {
    app.controller('ShoppinglistController', ['$scope', '$http', '$location','ShoppinglistService', function ($scope, $http, $location, ShoppinglistService) {
  console.log("hey bro whats up?")
       ShoppinglistService.getSLItems().then(function(items){
         console.log(items.data);
         $scope.ShopItems = items.data;
       });
    }]);


}
/////Scope.Inventories is in the profile controller////

},{}],12:[function(require,module,exports){
let app = angular.module('MarketApp', ['ngRoute', 'MarketControllers', 'MarketServices', 'MarketDirectives']);
angular.module('MarketControllers', []);       // create empty module
angular.module('MarketServices', []);          // create empty module
angular.module('MarketDirectives', []);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'LoginController',
      templateUrl: 'templates/login.html',
    })
    .when('/login', {
      controller: 'LoginController',
      templateUrl: 'templates/login.html',
    })
    .when('/profile', {
      controller: 'ProfileController',
      templateUrl: 'templates/profile.html',
    })
    .when('/newuser', {
      controller: 'NewUserController',
      templateUrl: 'templates/newuser.html',
    })
    .when('/explore', {
      controller: 'ExploreController',
      templateUrl: 'templates/explore.html',
    })
    .when('/art', {
      controller: 'ArtController',
      templateUrl: 'templates/art.html',
    })
    .when('/produce', {
      controller: 'ProduceController',
      templateUrl: 'templates/produce.html',
    })
    .when('/handCrafted', {
      controller: 'CraftedController',
      templateUrl: 'templates/handCrafted.html',
    })
    .when('/misc', {
      controller: 'MiscController',
      templateUrl: 'templates/misc.html',
    })
    .when('/inventory', {
      controller: 'InventoryController',
      templateUrl: 'templates/inventory.html',
    })
    .when('/shoppinglist', {
      controller: 'ShoppinglistController',
      templateUrl: 'templates/shoppinglist.html',
    })
    .when('/', {
      controller: 'NewitemController',
      templateUrl: 'templates/newItem.html'
    })

}])





function onSignIn(googleUser) {
     // Useful data for your client-side scripts:
     var profile = googleUser.getBasicProfile();
     console.log("ID: " + profile.getId()); // Don't send this directly to your server!
     console.log('Full Name: ' + profile.getName());
     console.log('Given Name: ' + profile.getGivenName());
     console.log('Family Name: ' + profile.getFamilyName());
     console.log("Image URL: " + profile.getImageUrl());
     console.log("Email: " + profile.getEmail());

     // The ID token you need to pass to your backend:
     var id_token = googleUser.getAuthResponse().id_token;
     console.log("ID Token: " + id_token);
   };

//controllers
// require('./controllers/LibraryController.js')(app);
require('./controllers/LoginController.js')(app);
require('./controllers/NewuserController.js')(app);
require('./controllers/ExploreController.js')(app);
require('./controllers/CraftedController.js')(app);
require('./controllers/InventoryController.js')(app);
require('./controllers/ShoppinglistController.js')(app);
require('./controllers/ProfileController.js')(app);
require('./controllers/ProduceController.js')(app);
require('./controllers/ArtController.js')(app);
require('./controllers/MiscController.js')(app);
require('./controllers/NewitemController.js') (app);
// require('./controllers/VideoController.js')(app);
// services
require('./services/login.js')(app);
require('./services/newUser.js')(app);
require('./services/shoppinglist.js')(app);
require('./services/newItem.js')(app);



document.getElementById('getval').addEventListener('change', readURL, true);
function readURL(){
    var file = document.getElementById("getval").files[0];
    var reader = new FileReader();
    reader.onloadend = function(){
        document.getElementById('clock').style.backgroundImage = "url(" + reader.result + ")";
    }
    if(file){
        reader.readAsDataURL(file);
    }else{
    }
}




function myFunction() {
    var myWindow = window.open("", "", "width=200,height=100");
}



var video, canvas, msg;
       var load = function () {
           video  = document.getElementById('video');
           canvas = document.getElementById('canvas');
           msg    = document.getElementById('error');
           if( navigator.getUserMedia ) {
               video.onclick = function () {
                   var context = canvas.getContext("2d");
                   context.drawImage(video, 0, 0, 240, 320);
                   var image = {"demo" : {
                       "type"  : "device",
                       "image" : canvas.toDataURL("image/png")
                   }};
               };

               var success = function ( stream ) {
                   video.src = stream;
               };

               var error = function ( err ) {
                   msg.innerHTML = "Error: " + err.code;
               };

               navigator.getUserMedia('video', success, error);

           } else {
               msg.innerHTML = "Native web camera not supported :(";
           }

       };

       window.addEventListener('DOMContentLoaded', load, false);

},{"./controllers/ArtController.js":1,"./controllers/CraftedController.js":2,"./controllers/ExploreController.js":3,"./controllers/InventoryController.js":4,"./controllers/LoginController.js":5,"./controllers/MiscController.js":6,"./controllers/NewitemController.js":7,"./controllers/NewuserController.js":8,"./controllers/ProduceController.js":9,"./controllers/ProfileController.js":10,"./controllers/ShoppinglistController.js":11,"./services/login.js":13,"./services/newItem.js":14,"./services/newUser.js":15,"./services/shoppinglist.js":16}],13:[function(require,module,exports){
module.exports = function(app) {
    app.factory('loginService', function($http, $location) {
        let username = "";

        return {
            userLogin: function(name, password, url, scope) {
              console.log("login might be working with", name, password, url);
              console.log($location)
                username = name;
                 $http({
                    method: 'POST',
                    url: '/login',
                    data: {
                        username: name,
                        password: password
                    }
                })
                .success(function (response) {
                  console.log(response);
                  $location.path(url);
                  return;
                })
                .error (function (){
                  alert("user does not exist!");
                })
            },
            getUserName: function() {
                return username;
            },

  






        }
    })
}

},{}],14:[function(require,module,exports){
module.exports=function(app){
app.factory('newItemService', ['$http', function ($http) {
    let shoppinglistItems = [];
    // $scope.Cat = '';
    // $scope.Name = '';
    // $scope.Desc = '';
    // $scope.Quant = '';
    // $scope.Price = '';
    return {

        addNEWitems: function (){
          console.log("sending diz")
          $http({
            method:'POST',
            url: "create-item"
          }).then(function(response){
            console.log("we created" + response);
            return response;
          });
          console.log("the end")
        },
        getSLItems: function () {
          var promise = $http({
                method: 'GET',
                url: 'get-items'
            }).success(function (response) {
                console.log(response);
                return response;
                // angular.copy(response., slItems);
            }).error(function (response) {
               return {"status": false};
            });

            return promise;
        },
        DeleteItems: function () {
          var gone = $http({
            method: 'POST',
            url: 'delete-item'
          }).success(function (response){
            console.log("response");
          })
        }






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

},{}],15:[function(require,module,exports){
module.exports = function(app) {
    app.factory('newUserService', function($http, $location) {
        let username = "";

        return {
            userLogin: function(name, password, url, scope) {
              console.log("newuser might be working with", name, password, url);
              console.log($location)
                username = name;
                 $http({
                    method: 'POST',
                    url: '/create-user',
                    data: {
                        username: name,
                        password: password
                    }
                })
                .success(function (response) {
                  console.log(response);
                  $location.path(url);
                  return;
                })
                .error (function (){
                  alert("newuser is fucking up again");
                })
            },
            getUserName: function() {
                return username;
            },
        }
    })
}

},{}],16:[function(require,module,exports){
module.exports=function(app){
app.factory('ShoppinglistService', ['$http', function ($http) {
    let shoppinglistItems = [];

    return {
        /* GET request for book list */
        getSLItems: function () {
          var promise = $http({
                method: 'GET',
                url: 'get-items'
            }).success(function (response) {
                console.log(response);
                return response;
                // angular.copy(response., slItems);
            }).error(function (response) {
               return {"status": false};
            });

            return promise;
        },
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

},{}]},{},[12])