var linkApp = angular.module('linkApp', ['ngRoute','mainCtrl', 'portCtrl', 'linkService']);

/* Route Provider */

linkApp.config([
   '$routeProvider', function($routeProvider)
    {
        $routeProvider.
            when( '/',
                {
                    templateUrl: '/views/templates/content_home.html',
                    controller: 'mainController'
                }
            ).
            when( '/portfolio',
                {
                    templateUrl: '/views/templates/content_portfolio.html',
                    controller: 'portController'
                }
            ).
            otherwise({redirectTo:("/")})
    }
]);



/* Directives */

linkApp.directive('footer', function() {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: "/views/templates/footer.html",
        controller: ['$scope', '$filter', function($scope, $filter) {
            // Behavior goes here
        }]
    }
});

linkApp.directive('header', function() {
    return {
        restrict: 'A',
        replace: true,
        scope: {user: '='}, // reads some type of variable
        templateUrl: "/views/templates/header.html",
        controller: ['$scope', '$filter', function($scope, $filter) {
            // Behavior goes here
        }]
    }
});

linkApp.directive('links', function() {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: "/views/templates/links.html",
        controller: ['$scope', '$filter', function($scope, $filter) {
            // Behavior goes here
        }]
    }
});

linkApp.directive('content_home', function()
{
    return {
        restrict: 'A',
        replace: true,
        templateUrl: "/views/templates/content_home.html",
        controller: ['$scope', '$filter', function($scope, $filter) {
            // Behavior goes here
        }]
    }
});


