'use strict';

angular.module('application')
  .controller('AnswerController', AnswerController);

  AnswerController.$inject = ['$scope', '$stateParams', '$state', '$controller', 'QuestionService', 'ApiFactory'];
  function AnswerController($scope, $stateParams, $state, $controller, QuestionService, ApiFactory) {
    angular.extend(this, $controller('DefaultController', {
      $scope: $scope, $stateParams: $stateParams, $state: $state
    }));

    if (!ApiFactory.getSession()) {
      ApiFactory.setSession();
    } 
      
    var sessionUserId = ApiFactory.getSession();

    $scope.answer = {};

    var answer = $scope.answer;

    $scope.answer = function() {
      var params = {
        description: answer.description,
        question_id: question._id,
        user_id: sessionUserId
      };

      // AnswerService.answer()

    };

    $scope.getRandomQuestion = function() {

      QuestionService.getRandom()
        .then(function(result) {

          console.log(result);
          $scope.question = result.data.first();
        })
        .catch(function(error) {
          console.log(error);
        });
    };

    $scope.getRandomQuestion();

  }