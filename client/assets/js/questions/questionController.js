'use strict';

angular.module('application')
  .controller('QuestionController', QuestionController);

  QuestionController.$inject = ['$scope', '$stateParams', '$state', '$controller', 'QuestionService'];
  function QuestionController($scope, $stateParams, $state, $controller, QuestionService) {
    angular.extend(this, $controller('DefaultController', {
      $scope: $scope, $stateParams: $stateParams, $state: $state
    }));

    $scope.question = {};

    $scope.askQuestion = function() {
      console.log($scope.question);
    };
  }