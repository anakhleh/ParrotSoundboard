app.directive('soundButton', function() { 
  return { 
    restrict: 'E', //create new element
    scope: { 
      sound: '=', //can pass in stuff with info="" attribute
    }, 
    templateUrl: 'js/directives/soundButton.html', //the template for the directive
  }; 
});