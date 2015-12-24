app.controller('HomeController', ['$scope', 'sounds', function($scope, sounds) {
    $scope.sounds = [];
    sounds.success(function(data) {
        $scope.sounds = data; //store the data in $scope.example
    });
}]);