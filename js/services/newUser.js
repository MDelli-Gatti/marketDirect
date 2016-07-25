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
