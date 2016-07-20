module.exports = function(app) {
    app.factory('loginService', ['$http', function($http) {
        let username = "";

        return {
            userLogin: function(name, password) {
              console.log("login might be working")
                username = name;
                return $http({
                    method: 'POST',
                    url: '/login',
                    data: {
                        username: name,
                        password: password
                    }
                }).then(function(response) {
                    console.log('getting the response', response);
                    // username = name;
                    console.log(username);
                })
            },
            getUserName: function() {
                return username;
            },
        }
    }])
}
