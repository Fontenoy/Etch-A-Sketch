var newclass = $('.sqaure');

$(document).ready(function() {
	$('#btn').click(function() {
         $('.wrapper div:first')
            .clone()
            .append('clone')
            .appendTo($('.wrapper'));
    });


});
