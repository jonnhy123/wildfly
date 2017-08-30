'use strict';

angular.module('apicliente',['ngRoute','ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/landing.html',controller:'LandingPageController'})
      .when('/Clientes',{templateUrl:'views/Cliente/search.html',controller:'SearchClienteController'})
      .when('/Clientes/new',{templateUrl:'views/Cliente/detail.html',controller:'NewClienteController'})
      .when('/Clientes/edit/:ClienteId',{templateUrl:'views/Cliente/detail.html',controller:'EditClienteController'})
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('LandingPageController', function LandingPageController() {
  })
  .controller('NavController', function NavController($scope, $location) {
    $scope.matchesRoute = function(route) {
        var path = $location.path();
        return (path === ("/" + route) || path.indexOf("/" + route + "/") == 0);
    };
  });
