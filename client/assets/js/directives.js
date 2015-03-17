'use strict';

angular.module('application')
  .directive('rating', ['RatingService', function rating(RatingService) {
    return {
      restrict: 'AE',
      templateUrl: 'templates/partials/rating.html',
      link: function(scope, element, attrs) {

        element.bind('click', function() {

          if (attrs.entity == 'question') {

            var params = {
              question_id: scope.question_id
            };

            RatingService.rateQuestion(params)
              .then(function(result) {

              });

          } else if (attrs.entity == 'answer') {

            var params = {
              answer_id: scope.answer_id
            };

            RatingService.rateAnswer(params)
              .then(function(result) {

              });

          }
        });

      }
    }
  }]);