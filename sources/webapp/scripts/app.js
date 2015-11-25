var app = angular.module('myApp', ['ngRoute']);

//Define Routing for app
app.config(['$routeProvider',
    function($routeProvider, $httpProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'tpl/content.html',
            controller: 'IndexController.js'
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);
