'use strict';

angular.module('application')
  .service('QuestionService', QuestionService);

  QuestionService.$inject = ['ApiFactory', '$http'];
  function QuestionService(ApiFactory, $http) {
    ApiFactory.ping().then(function(result) {
      console.log(result);
    });

    var api = ApiFactory.host.concat('/questions');

    this.getAll = function() {
      return $http.get(api);
    };

    this.getAllByUser = function(params) {
      var endpoint = api + '/user/' + params.user_id;
      return $http.get(endpoint);
    };

    this.getRandom = function() {
      var endpoint = api + '/random';
      return $http.get(endpoint);
    };

    this.findById = function(params) {
      return $http.get(api + '/' + params.question_id);
    };

    this.create = function(params) {

      console.log(api);

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