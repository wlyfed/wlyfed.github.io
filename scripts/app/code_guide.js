/**
 * 
 * @authors Luoxue (1904240744@qq.com)
 * @date    2020-02-11
 * @version 1.1.0
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
