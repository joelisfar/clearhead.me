var inview1 = new Waypoint.Inview({
  element: jQuery('#what')[0],
  enter: function(direction) {
  	if (direction === "down") {
  		jQuery(".menu-item").removeClass("active");
  		jQuery(".menu-item-6").addClass("active");
  	}
  },
  exit: function(direction) {
  	if (direction === "up") {
    	jQuery(".menu-item").removeClass("active");
  		jQuery(".menu-item-6").addClass("active");
  	}
  }
});

var inview2 = new Waypoint.Inview({
  element: jQuery('#with')[0],
  enter: function(direction) {
  	if (direction == "down") {
  		jQuery(".menu-item").removeClass("active");
  		jQuery(".menu-item-8").addClass("active");
  	}
  },
  exit: function(direction) {
  	if (direction === "up") {
    	jQuery(".menu-item").removeClass("active");
  		jQuery(".menu-item-8").addClass("active");
  	}
  }
});

var inview3 = new Waypoint.Inview({
  element: jQuery('#who')[0],
  enter: function(direction) {
  	if (direction === "down") {
  		jQuery(".menu-item").removeClass("active");
  		jQuery(".menu-item-7").addClass("active");
  	}
  },
  exit: function(direction) {
  	if (direction === "up") {
    	jQuery(".menu-item").removeClass("active");
  		jQuery(".menu-item-7").addClass("active");
  	}
  }
});

var inview2 = new Waypoint.Inview({
  element: jQuery('#contact')[0],
  enter: function(direction) {
  	if (direction === "down") {
  		jQuery(".menu-item").removeClass("active");
  		jQuery(".menu-item-9").addClass("active");
  	}
  },
  exit: function(direction) {
  	if (direction === "up") {
    	jQuery(".menu-item").removeClass("active");
  		jQuery(".menu-item-9").addClass("active");
  	}
  }
});


jQuery('.menu-item a, a.smooth-scroll, a[href$="main"]').click(function() {
    if (jQuery(window).width() <= 639) {
    	var href = jQuery(this).attr('href');
    	var trimmed = href.substring(1);
        if(trimmed === "main") {
            jQuery('html, body').animate({
                scrollTop: 0
            }, 700);
        }
        else {
            jQuery('html, body').animate({
                    scrollTop: jQuery( trimmed ).offset().top - 98
            }, 700);
        }
        jQuery(".main-navigation").removeClass("toggled");
        return false;
    }
    else {
        var href = jQuery(this).attr('href');
    	var trimmed = href.substring(1);
        if(trimmed === "main") {
            jQuery('html, body').animate({
                scrollTop: 0
            }, 700);
        }
        else {
            jQuery('html, body').animate({
                    scrollTop: jQuery( trimmed ).offset().top - 49
            }, 700);
        }
        jQuery(".main-navigation").removeClass("toggled");
        return false;
    }
});



// show/hide browse menu
jQuery('.menu-toggle-mobile').click(function(e) {
    e.preventDefault();
    jQuery('body').toggleClass('show-menu-mobile');
});
