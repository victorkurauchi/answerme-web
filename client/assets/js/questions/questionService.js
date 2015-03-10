'use strict';

angular.module('application')
  .service('QuestionService', QuestionService);

  QuestionService.$inject = ['ApiFactory', '$http'];
  function QuestionService(ApiFactory, $http) {
    ApiFactory.ping().then(function(result) {
      console.log(result);
    });

    var endpoint = ApiFactory.host.concat('/questions');

    var getAll = function() {
      return $http.get(endpoint);
    };

    var findById = function(params) {
      return $http.get(endpoint + '/' + params.question_id);
    };

    var create = function(params) {

    };

    var remove = function(params) {

    };

    var update = function(params) {

    };

    var rate = function(params) {

    };
  }