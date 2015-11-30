app.factory('sounds', ['$http', function($http) { 
  return $http.get('file:///D:/GitHub/ParrotSoundboard/sounds.json') //change this before commiting
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);