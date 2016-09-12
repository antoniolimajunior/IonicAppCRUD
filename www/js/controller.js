angular.module('UserDirectory')
.controller('ListCtrl', function($scope, UserStore, $ionicPopup){
    $scope.reordering = false;
    $scope.users = UserStore.list();

    $scope.remove = function(userId){
      UserStore.remove(userId);
    }

    $scope.move = function(user, fromIndex, toIndex){
      UserStore.move(user, fromIndex, toIndex);
    }

    $scope.toggleReordering = function(){
      $scope.reordering = !$scope.reordering;
    }

    $scope.cleardb = function(){
      UserStore.cleardb();
      $ionicPopup.alert({
        title:'Sucesso',
        template:'Removido todos os registros'
      });

    }
    
  });

angular.module('UserDirectory')
.controller('AddCtrl', function($scope, $state, UserStore){
    $scope.user = {
      id: new Date().getTime().toString(),
      name: "",
      age: "",
      gender: "",
      nationality: ""
    };
    $scope.save = function(){
      UserStore.create($scope.user);
      $state.go('list');
    };
  });

angular.module('UserDirectory')
.controller('EditCtrl', function($scope, $state, UserStore){
    $scope.user = angular.copy(UserStore.get($state.params.userId));
    $scope.save = function(){
      UserStore.update($scope.user);
      $state.go('list');
    };
  });

angular.module('UserDirectory')
.controller('VisualCtrl', function($scope, $state, UserStore){
    $scope.visual = UserStore.visual();

    $scope.labels = $scope.visual[0];
    $scope.series = $scope.visual[1];
    $scope.data = $scope.visual[2];
    $scope.pie_data = $scope.visual[3];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
  });