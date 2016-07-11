angular.module('scotchTodo', ['todoController', 'todoService']);
/*
cApp .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/about', {
        templateUrl: 'about.html'
      }).
      when('/showOrders', {
        templateUrl: 'help.html'
      }).
      otherwise({
        redirectTo: '/about'
      });
  }]);*/
/*
(function() {
  'use strict';
  angular.module('scotchTodo', ['ngRoute'])
  .config([
    '$routeProvider', function($routeProvider) {
      $routeProvider.when('/about', {
        templateUrl: 'about.html'
      });
      $routeProvider.when('/help', {
        templateUrl: 'help.html'
      });
      $routeProvider.when('/contact', {
        templateUrl: 'contact.html'
      });
    }
  ]);
}).call(this);
*/