var app = angular.module('parrot',['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {                        //when the url is this,
            controller: 'HomeController',   //use this controller
            templateUrl: './views/home.html'  //and this template for ng-view
        })
        .when('/cat/:cat', {
            controller: 'SoundController',
            templateUrl: './views/sound.html'
        })
        .when('/cat/:cat/:subcat', {
            controller: 'SoundController',
            templateUrl: './views/sound.html'
        })
        .when('/sound/:filename', {
            controller: 'SoundController',
            templateUrl: './views/sound.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});