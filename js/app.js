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

}])

//controllers
// require('./controllers/LibraryController.js')(app);
require('./controllers/LoginController.js')(app);
require('./controllers/NewUserController.js')(app);
// require('./controllers/playlistController.js')(app);

// services
// require('./services/libraryService.js')(app);
require('./services/login.js')(app);
require('./services/newUser.js')(app);
