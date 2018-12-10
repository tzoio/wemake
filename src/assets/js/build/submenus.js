"use strict";

var itemHover = document.querySelectorAll('.submenu');

itemHover.forEach( function(elem, index) {
	elem.addEventListener('mouseover', function () {openSubmenu(elem)}, false);
 	elem.addEventListener('mouseout', function () {closeSubmenu(elem)}, false);
});


function openSubmenu (elem) {
	elem.querySelector('ul').setAttribute('style', 'display: block !important;');
}

function closeSubmenu (elem) {
	elem.querySelector('ul').setAttribute('style', 'display: none !important;');
}