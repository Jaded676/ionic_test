app.controller('AppCtrl', function($scope) {
 $scope.data = {};
 $scope.name = "World";
  
  $scope.saveName = function() {
   if ($scope.data.firstName && $scope.data.lastName) {
    $scope.name = $scope.data.firstName + " " + $scope.data.lastName;
  } else {
    alert("Please fill out the fields before submitting!");
  }
  };
});