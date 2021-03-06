define(["require", "exports", 'coreModule', '../app/modules/loader'], function (require, exports, coreModule, loaderURL) {
    coreModule.config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
            controller: function ($scope) {
                $scope.Title = "Welcome To HOME Page";
            },
            template: '<h3>{{Title}}</h3>'
        })
            .when('/profile', {
            ctrlName: 'profile',
            controller: loaderURL.Loader,
            templateUrl: '../app/modules/core/views/profile.html'
        })
            .otherwise({ redirectTo: '/home' });
    });
});
