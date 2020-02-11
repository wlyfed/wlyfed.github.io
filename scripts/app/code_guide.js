/**
 * 
 * @authors Luoxue (1904240744@qq.com)
 * @date    2015-08-12 08:26:13
 * @version 1.0.0
 */


var navToggle = $('[data-toggle="collapse"]'),
    sidebarList = $('[data-rel="menu"] a'),
    navbar = $('[data-rel="menu"]');

navToggle.bind('click', function () {
    if(navbar.data('toggle') === true) {
    	navbar.removeData('toggle').removeClass('menu-translate');
    }else {
    	navbar.data('toggle', true).addClass('menu-translate');
    }
});
