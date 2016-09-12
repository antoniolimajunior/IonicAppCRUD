angular.module('UserDirectory')
.config(function($stateProvider, $urlRouterProvider){

    $stateProvider.state('list', {
      url: '/list',
      templateUrl: 'templates/list.html'
    });

    $stateProvider.state('add', {
      url: '/add',
      templateUrl: 'templates/edit.html',
      controller: 'AddCtrl'
    });

    $stateProvider.state('edit', {
      url: '/edit/:userId',
      templateUrl: 'templates/edit.html',
      controller: 'EditCtrl'
    });

    $stateProvider.state('visual', {
      url: '/visual',
      templateUrl: 'templates/visual.html',
      controller: 'VisualCtrl'
    });

    $urlRouterProvider.otherwise('/list');

  });
