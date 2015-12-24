var app = angular.module('parrot',['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {                        //when the url is this,
            controller: 'HomeController',   //use this controller
            templateUrl: './views/home.html'  //and this template for ng-view
        })
        /* .when('/photos/:id', {
            controller: 'PhotoController',
            templateUrl: './views/photo.html'
        })
        .when('/photos/-1', {
            redirectTo: '/'
        }) */
        .otherwise({
            redirectTo: '/'
        });
});