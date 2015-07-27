var nodeDealerApp = angular.module('nodeDealerApp', [
  'ngRoute',
  'nodeDealerControllers',
  'nodeDealerServices'
]);

nodeDealerApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/newGame.html',
      controller: 'newGameCtrl'
    }).
    when('/deals/:id', {
      templateUrl: 'partials/deal.html',
      controller: 'dealCtrl'
    }).
    when('/deals', {
      templateUrl: 'partials/deals.html',
      controller: 'dealsCtrl'
    });
  }
]);
