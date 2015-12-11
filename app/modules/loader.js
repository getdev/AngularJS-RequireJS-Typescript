define(["require", "exports"], function (require, exports) {
    var Loader = (function () {
        function Loader($scope, $route, $http) {
            this.$scope = $scope;
            this.$route = $route;
            this.$http = $http;
            var controllerName = $route.current.ctrlName;
            if (controllerName) {
                require(['../../app/modules/core/controllers/' + controllerName.toLowerCase() + '.js'], function (URL) {
                    this.$scope = new URL.Controller($scope, $route, $http).$scope;
                    this.$scope.$apply();
                });
            }
        }
        return Loader;
    })();
    exports.Loader = Loader;
});
