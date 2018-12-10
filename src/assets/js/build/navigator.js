"use strict";
var options = $('.navigator').find('a');
var all_fills = $(options).find('circle:nth-child(2)');
var red = '#d90428';
var dark_gray = '#1b1e25';


function changeOption (item) {
	var fill = $(item).find('circle:nth-child(2)');
	
	if (fill.attr('fill') != red) {
		$(all_fills).attr('fill', dark_gray);
		$(fill).attr('fill', red);
	}
}


$(options).click(function(e){	
	e.preventDefault();

	var item = $(this).attr('href');
	var itemPosition = $(item).offset().top;


	$('body').animate({scrollTop:itemPosition},'700');

});

var can = true;
$(window).scroll(function () {

	if (can) {
		can = false;
		var timer = setTimeout(function(){ can = true; }, 100);
		var scrollPos = $(window).scrollTop();

		$(options).each(function () {

			var item = $(this).attr('href');
			var itemPosition = $(item).offset().top;

			if (itemPosition-100 < scrollPos) {
				changeOption(this);
			}
		});
		
	}

})
