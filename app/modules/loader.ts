export class Loader {
    constructor(public $scope, private $route, private $http) {
        var controllerName = $route.current.ctrlName;
        if (controllerName) {
            require(['../../app/modules/core/controllers/' + controllerName.toLowerCase() +'.js'], function (URL) {
                this.$scope = new URL.Controller($scope, $route, $http).$scope;
                this.$scope.$apply();
            });
        }
    }


}