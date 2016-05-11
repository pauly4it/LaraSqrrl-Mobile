APP.controller('FeedController', ["$scope",'CurrentUser', function ($scope, CurrentUser) {

  var testData = {
    name: "Paul",
    phone: "15555555556",
    role: "enthusiast",
    nuts: 0,
    photos: [
      {
        id: 1,
        url: "https://s3.amazonaws.com/larasqrrl/user_submissions/1/2016-02-09/195008.jpeg",
        responses: [
          {
            user: "Steve",
            isSquirrel: true
          },
          {
            user: "Dave",
            isSquirrel: false
          }
        ]
      },
      {
        id: 2,
        url: "https://s3.amazonaws.com/larasqrrl/user_submissions/1/2016-02-09/195136.png",
        responses: [
          {
            user: "Bob",
            isSquirrel: false
          },
          {
            user: "Paul",
            isSquirrel: true
          }
        ]
      }
    ]
  };

  $scope.photos = {};
  $scope.user = CurrentUser.retrieve();

  //$scope.photos = testData.photos;

  if ($scope.user.photos) {
    $scope.photos = $scope.user.photos;

    console.log($scope.photos);
  }

}]);

