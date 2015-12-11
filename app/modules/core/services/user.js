define(["require", "exports"], function (require, exports) {
    var UserService = (function () {
        //static $inject = ['$http'];
        function UserService($http) {
            this.$http = $http;
        }
        UserService.prototype.getUserByName = function (username) {
            return this.$http.get('http://api.github.com/users/' + username)
                .then(function (response) {
                return response.data;
            });
        };
        return UserService;
    })();
    exports.UserService = UserService;
});
