'use strict';

angular.module('application')
  .controller('QuestionController', QuestionController);

  QuestionController.$inject = ['$scope', '$stateParams', '$state', '$controller', 'QuestionService', 'ApiFactory'];
  function QuestionController($scope, $stateParams, $state, $controller, QuestionService, ApiFactory) {
    angular.extend(this, $controller('DefaultController', {
      $scope: $scope, $stateParams: $stateParams, $state: $state
    }));

    if (!ApiFactory.getSession()) {
      ApiFactory.setSession();
    } 
      
    var sessionUserId = ApiFactory.getSession();

    $scope.question = {};

    var question = $scope.question;

    $scope.askQuestion = function() {
      var params = {
        description: question.description,
        user_id: sessionUserId
      };

      QuestionService.create(params)
        .then(function(result) {
          $scope.question = {};
          $scope.getAll();
        })
        .catch(function(error) {
          console.log('erro');
          console.log(error);
        });

    };

    $scope.getAll = function() {
      QuestionService.getAll()
        .then(function(result) {
          console.log(result.data);
          $scope.questions = result.data;
        });
    };

    $scope.getAllByUser = function() {
      var params = {
        user_id: sessionUserId
      };

      QuestionService.getAllByUser(params)
        .then(function(result) {
          console.log(result.data);
          $scope.questions = result.data;
        });
    };

    $scope.getAllByUser();

  }