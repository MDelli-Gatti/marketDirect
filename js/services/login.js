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
