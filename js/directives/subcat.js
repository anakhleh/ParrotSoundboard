app.directive('subcat', function() { 
  return { 
    restrict: 'E', //create new element
    scope: { 
      subcat: '=', //can pass in stuff with info="" attribute
    }, 
    templateUrl: 'js/directives/subcat.html', //the template for the directive
  }; 
});