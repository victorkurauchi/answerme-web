'use strict';

angular.module('application')
  .service('AnswerService', AnswerService);

  AnswerService.$inject = ['ApiFactory', '$http'];
  function AnswerService(ApiFactory, $http) {
    ApiFactory.ping().then(function(result) {
    });

    var api = ApiFactory.host.concat('/answers');

    this.getAll = function() {
      return $http.get(api);
    };

    this.getAllByUser = function(params) {
      var endpoint = api + '/user/' + params.user_id;
      return $http.get(endpoint);
    };

    this.findById = function(params) {
      return $http.get(api + '/' + params.question_id);
    };

    this.answer = function(params) {

      return $http({
        url: api,
        method: 'post',
        data: params
      });

    };

    this.remove = function(params) {

    };

    this.update = function(params) {

    };

    this.rate = function(params) {

    };
  }