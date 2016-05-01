app.controller('SoundController', ['$scope', 'Page', 'sounds', '$routeParams', '$location', function($scope, Page, sounds, $routeParams, $location) {
     sounds.success(function(data) {
        var redirect = true;
        for(var index in data.cats){
            if(data.cats[index].name.toLowerCase() == $routeParams.cat.toLowerCase()){
                $scope.catDetail = data.cats[index];
                redirect = false;
                Page.setTitle($scope.catDetail.name + " - Parrot");
            }
        }
        if(redirect){
            $location.path("/").replace();
        }
    });
}]);