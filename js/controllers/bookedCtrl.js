angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrv){

if ($stateParams.id ==="112233") {
  $scope.booked = mainSrv.travelInfo[0]
  $scope.img = $scope.booked.image
  $scope.myObj = {"background" : "url("+$scope.img+") no-repeat center center / cover"};
}
if ($stateParams.id ==="1122343") {
  $scope.booked = mainSrv.travelInfo[1]
  $scope.img = $scope.booked.image
  $scope.myObj = {"background" : "url("+$scope.img+") no-repeat center center / cover"};
}
if ($stateParams.id ==="11223489") {
  $scope.booked = mainSrv.travelInfo[2]
  $scope.img = $scope.booked.image
  $scope.myObj = {"background" : "url("+$scope.img+") no-repeat center center / cover"};
}
})
