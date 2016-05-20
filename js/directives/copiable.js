//http://stackoverflow.com/questions/17527870/how-does-trello-access-the-users-clipboard#comment42832072_17528590
//http://jsfiddle.net/lapo/4qhn8gm1/
app.directive('copiable', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var cont = document.getElementById('clipboard-container'),
                clip = document.getElementById('clipboard');
            element.on('mouseenter', function () {
                //element.addClass('copiable');
                cont.style.display = 'block';
                clip.value = attrs.copiable;
                clip.focus();
                clip.select();
            });
            element.on('mouseleave', function () {
                //element.removeClass('copiable');
                cont.style.display = 'none';
                clip.value = '';
            });
        }
    };
});