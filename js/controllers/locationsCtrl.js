angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv){
$scope.locData = mainSrv.travelInfo
console.log($scope.locData)
$scope.test="test"
})
