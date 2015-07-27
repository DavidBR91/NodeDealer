var nodeDealerControllers = angular.module('nodeDealerControllers', []);

nodeDealerControllers.controller('newGameCtrl', ['$scope', '$http', '$location', 'serviceObj',
  function ($scope, $http, $location, serviceObj) {

    $scope.newGame = function () {
      $http.post('/deals').success(function (result) {
        serviceObj.setValue(result);
        $location.url('/deals/' + result.id);
      }).error( function (error) {
        alert(error);
      });
    }
  }
]);

nodeDealerControllers.controller('dealCtrl', ['$scope', 'serviceObj',
  function ($scope, serviceObj) {

    $scope.score = serviceObj.getValue().score + ' %';
    $scope.deck = serviceObj.getValue().deckConfig;

    $scope.concatSuit = function (pos) {
      return '&' + $scope.deck[pos].suit + ';';
    }

    $scope.needsHighlight = function (pos) {
      return $scope.deck[pos].highlight;
    }

    /* Found at http://stackoverflow.com/questions/11873570/angularjs-for-loop-with-numbers-ranges */
    $scope.range = function(min, max, step){
      step = step || 1;
      var input = [];
      for (var i = min; i <= max; i += step) input.push(i);
      return input;
    };

  }
]);

nodeDealerControllers.controller('dealsCtrl', ['$scope', '$http', '$location', 'serviceObj',
  function ($scope, $http, $location, serviceObj) {

    $scope.dealList = [];

    $http.get('/deals').success(function (result) {
      $scope.dealList = result.deals;
    }).error(function (error) {
      alert(error);
    });

    $scope.showDeal = function (deal) {

      serviceObj.setValue(deal);
      $location.url('/deals/' + deal._id);

    }
  }
]);
