jQuery(function() {
    initMobileNav();
});

// mobile menu init
function initMobileNav() {
    jQuery('body').mobileNav({
        menuActiveClass: 'nav-active',
        menuOpener: '.nav-opener'
    });
}

  $( function() {
    $( "#release-product-tabs" ).tabs();
  });