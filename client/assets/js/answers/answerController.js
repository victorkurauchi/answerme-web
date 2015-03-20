'use strict';

angular.module('application')
  .controller('AnswerController', AnswerController);

  AnswerController.$inject = ['$scope', '$stateParams', '$state', '$controller', 'QuestionService', 'ApiFactory', 'AnswerService'];
  function AnswerController($scope, $stateParams, $state, $controller, QuestionService, ApiFactory, AnswerService) {
    angular.extend(this, $controller('DefaultController', {
      $scope: $scope, $stateParams: $stateParams, $state: $state
    }));

    if (!ApiFactory.getSession()) {
      ApiFactory.setSession();
    } 
      
    var sessionUserId = ApiFactory.getSession();

    $scope.answer = {};
    $scope.question = {};

    $scope.answer = function() {
      var params = {
        description: $scope.answer.description,
        question_id: $scope.question._id,
        user_id: sessionUserId
      };

      AnswerService.answer(params)
        .then(function(result) {
          $scope.answer = {};
          $scope.message = result.data.message;
          console.log(result);
        })
        .catch(function(error) {
          console.log(error);
        });

    };

    $scope.getRandomQuestion = function() {

      QuestionService.getRandom()
        .then(function(result) {

          console.log(result.data[0]);
          $scope.question = result.data[0];
        })
        .catch(function(error) {
          console.log(error);
        });
    };

    $scope.getRandomQuestion();

  }