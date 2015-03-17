'use strict';

angular.module('application')
  .service('RatingService', RatingService);

  RatingService.$inject = ['ApiFactory', '$http'];
  function RatingService(ApiFactory, $http) {
    ApiFactory.ping().then(function(result) {
      console.log(result);
    });

    var endpoint = ApiFactory.host.concat('/rating');

    this.rateQuestion = function(params) {
      endpoint = endpoint + '/question/' + params.question_id;

      return $http.post(endpoint, params);
    };

    this.rateAnswer = function(params) {
      endpoint = endpoint + '/answer/' + params.answer_id;

      return $http.post(endpoint, params);
    };
  }