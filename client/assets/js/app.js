(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations',
    'angular-md5'
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

  ApiFactory.$inject = ['$http', 'md5'];
  function ApiFactory($http, md5) {
    angular.extend(this, {
      $http: $http
    });

    var host = 'http://104.131.229.56:3000/api';

    var ping = function() {
      return $http.get(host);
    };

    var createHashCode = function(str) {
      return md5.createHash(str || '');
    };

    var setSession = function() {
      var hash = createHashCode();
      localStorage.setItem('_answerme_user', hash);
    };

    var getSession = function(id) {
      return localStorage.getItem('_answerme_user');
    }

    return {
      host: host,
      ping: ping,
      setSession: setSession,
      getSession: getSession
    };
  }

})();
