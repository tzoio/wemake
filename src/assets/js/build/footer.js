"use strict";

var social_svg = $('.social-media a');

$(social_svg).each(function () {
	var white = '1';
	var light_white;

	$(this).mouseenter(function () {
		var path = $(this).find('path');
		light_white = $(path).attr('fill-opacity');
		$(path).attr('fill-opacity', white);
	})

	$(this).mouseleave(function () {
		var path = $(this).find('path');
		$(path).attr('fill-opacity', light_white);
		
	})
})


