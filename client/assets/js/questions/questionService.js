'use strict';

angular.module('application')
  .service('QuestionService', QuestionService);

  QuestionService.$inject = ['ApiFactory', '$http'];
  function QuestionService(ApiFactory, $http) {
    ApiFactory.ping().then(function(result) {
      console.log(result);
    });

    var endpoint = ApiFactory.host.concat('/questions');

    this.getAll = function() {
      return $http.get(endpoint);
    };

    this.getAll = function() {
      var endpoint = endpoint + '/user/' + ApiFactory.getSession()
      return $http.get(endpoint);
    };

    this.findById = function(params) {
      return $http.get(endpoint + '/' + params.question_id);
    };

    this.create = function(params) {
      // var param = {
      //   description: params.description
      // };

      console.log(params);

      return $http.post(endpoint, params);
    };

    this.remove = function(params) {

    };

    this.update = function(params) {

    };

    this.rate = function(params) {

    };
  }