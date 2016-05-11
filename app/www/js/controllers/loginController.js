APP.controller('LoginController', ["$scope", "$resource", '$state', '$ionicHistory', 'CurrentUser', function ($scope, $resource, $state, $ionicHistory, CurrentUser) {

  var User = $resource('http://larasqrrl-demo.us-east-1.elasticbeanstalk.com/api/users/:number');

  $scope.loginData = {};

  $scope.doLogin = function() {
    $ionicHistory.nextViewOptions({
      disableBack: true
    });

    console.log('logging in');

    User.get({ number: $scope.loginData.number }, function(user) {
      CurrentUser.save(user);
      $scope.user = CurrentUser.retrieve();
      console.log($scope.user);
      console.log($scope.user.photos);
      $scope.loginData = {};
      $state.go('feed');
    });

  };

}]);
