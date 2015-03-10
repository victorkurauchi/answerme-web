(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
    .config(config)
    .run(run)
    .factory('ApiFactory', ApiFactory)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

  ApiFactory.$inject = ['$http'];
  function ApiFactory($http) {
    angular.extend(this, {
      $http: $http
    });

    var host = 'http://104.131.229.56/api';

    var ping = function() {
      return $http.get(host);
    };

    return {
      host: host,
      ping: ping
    };
  }

})();
