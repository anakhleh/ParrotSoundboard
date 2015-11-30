app.controller('HomeController', ['$scope', 'sounds', function($scope, sounds) {
    $scope.sounds = [];
    sounds.success(function(data) {
        $scope.sounds = data; //store the data in $scope.example
    });
	
	$scope.playSound = function(filename) {
		var soundObj = document.getElementById('sound');
		soundObj.pause(); 
		soundObj.src = './sounds/' + filename + '.mp3';
		soundObj.currentTime = 0; 
		soundObj.play();
	};
	
	$scope.stopSound = function() {
		var soundObj = document.getElementById('sound');
		soundObj.pause(); 
		soundObj.currentTime = 0;
	};
}]);