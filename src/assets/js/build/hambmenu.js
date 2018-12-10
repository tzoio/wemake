"use strict";

var hamb = $('#hamb');
var header = $('header');
var hambmenu;

function setHeight ($elem) {
	$($elem).height(window.innerHeight);
}


function createDivBefore(before,id) {
	console.log($('#'+id).height())
	if ($('#'+id).height() !== 0) {
		$(before).before('<div id="'+id+'"></div>');

	}
	// $().remove();
	
	return $('#'+id);
}

function headerFadeOut(div, type) {
	
	if (type == 'animated') {

		$.when($(hambmenu).css('z-index','-1'))
			.then(function () {
				$(div).animate({height: '0'}, 1000);
				$(header).animate({top: '0'},1000, function () {
					$(hambmenu).hide();
				});
			});
	} else if (type == 'plain') {
		$(hambmenu).css('z-index','-1')
		$(div).css('height', '0');
		$(header).css('top','0');
		$(hambmenu).hide();
	}
}

function headerFadeIn(div) {
	console.log('fadeIn');
	var hambmenuheight = $(hambmenu).outerHeight(true);

	$(hambmenu).show();
	$(header).animate({top: hambmenuheight},1000);
	$(div).animate({height: hambmenuheight}, 1000,
	function(){
		$(hambmenu).css('z-index','1');
	})

}

$(hamb).click(function () {
	hambmenu = $(this).attr('href');
	var div = createDivBefore(hambmenu,'animation');
	var divHeight = $(div).height();
	console.log(divHeight);
	if (divHeight == 0) {
		var hambmenuheight = $(hambmenu).outerHeight(true);

		//move header in index page
		$('#animation').css('background-color', 'transparent');

		headerFadeIn('#animation');
		
	} else {
		headerFadeOut('#animation','animated');
		
	}
})

$(window).resize(function () {

	headerFadeOut('#animation','plain');
});