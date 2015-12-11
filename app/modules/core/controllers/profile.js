define(["require", "exports", '../../../../app/modules/core/services/user'], function (require, exports, userServiceURL) {
    var Controller = (function () {
        function Controller($scope, $route, $http) {
            var _this = this;
            this.$scope = $scope;
            this.$route = $route;
            this.$http = $http;
            this.$scope.test = ":)";
            this.$scope.someData = "this is a test";
            this.$scope.someAction = function () {
                console.log($route.current.locals.Data([], function (response) {
                    console.log(response);
                }));
            };
            this.$scope.doSearch = function () {
                debugger;
                alert('Thanks for Calling mE , :)');
            };
            this.$scope.doSearch2 = function () {
                var service = new userServiceURL.UserService(_this.$http);
                service.getUserByName('jveldboom').then(function (response) {
                    console.log(response);
                });
            };
        }
        return Controller;
    })();
    exports.Controller = Controller;
});
