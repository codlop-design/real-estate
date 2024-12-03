(function ($) {
    "use strict";


    // multi level dropdown menu
    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
        }
        var $subMenu = $(this).next('.dropdown-menu');
        $subMenu.toggleClass('show');

        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-submenu .show').removeClass('show');
        });
        return false;
    });



    // data-background    
    $(document).on('ready', function () {
        $("[data-background]").each(function () {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
        });
    });


    // wow init
    new WOW().init();


    // hero slider
    // $('.hero-slider').owlCarousel({
    //     loop: true,
    //     nav: true,
    //     dots: false,
    //     margin: 0,
    //     autoplay: true,
    //     autoplayHoverPause: true,
    //     autoplayTimeout: 5000,
    //     items: 1,
    //     navText: [
    //         "<i class='far fa-long-arrow-left'></i>",
    //         "<i class='far fa-long-arrow-right'></i>"
    //     ],

    //     onInitialized: function(event) {
    //     var $firstAnimatingElements = $('.owl-item').eq(event.item.index).find("[data-animation]");
    //     doAnimations($firstAnimatingElements);
    //     },

    //     onChanged: function(event){
    //     var $firstAnimatingElements = $('.owl-item').eq(event.item.index).find("[data-animation]");
    //     doAnimations($firstAnimatingElements);
    //     }
    // });

    //hero slider do animations
    function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationDuration = $this.data('duration');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay,
                'animation-duration': $animationDuration,
                '-webkit-animation-duration': $animationDuration,
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}



    // category-slider
    // $('.category-slider').owlCarousel({
    //     loop: true,
    //     margin: 20,
    //     nav: false,
    //     dots: true,
    //     navText: [
    //         "<i class='fal fa-long-arrow-left'></i>",
    //         "<i class='fal fa-long-arrow-right'></i>"
    //     ],
    //     autoplay: true,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 2
    //         },
    //         1000: {
    //             items: 4
    //         }
    //     }
    // });



    // property-listing-slider
    // $('.property-listing-slider').owlCarousel({
    //     loop: true,
    //     margin: 0,
    //     nav: false,
    //     dots: true,
    //     navText: [
    //         "<i class='fal fa-long-arrow-left'></i>",
    //         "<i class='fal fa-long-arrow-right'></i>"
    //     ],
    //     autoplay: true,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 2
    //         },
    //         1000: {
    //             items: 3
    //         }
    //     }
    // });

  

    // testimonial-slider
    // $('.testimonial-slider').owlCarousel({
    //     loop: true,
    //     margin: 30,
    //     nav: false,
    //     dots: true,
    //     autoplay: true,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 2
    //         },
    //         1000: {
    //             items: 4
    //         }
    //     }
    // });


    // // partner-slider
    // $('.partner-slider').owlCarousel({
    //     loop: true,
    //     margin: 20,
    //     nav: false,
    //     dots: false,
    //     autoplay: true,
    //     responsive: {
    //         0: {
    //             items: 2
    //         },
    //         600: {
    //             items: 3
    //         },
    //         1000: {
    //             items: 6
    //         }
    //     }
    // });



    // property-single-slider
    $('.property-single-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: [
            "<i class='fal fa-long-arrow-left'></i>",
            "<i class='fal fa-long-arrow-right'></i>"
        ],
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    // property-similar-slider
    $('.property-similar-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        navText: [
            "<i class='fal fa-long-arrow-left'></i>",
            "<i class='fal fa-long-arrow-right'></i>"
        ],
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });



    // preloader
    $(window).on('load', function () {
        $(".preloader").fadeOut("slow");
    });


    // fun fact counter
    $('.counter').countTo();
    $('.counter-box').appear(function () {
        $('.counter').countTo();
    }, {
        accY: -100
    });



    // progress bar
    $(document).ready(function(){
        var progressBar = $('.progress');
        if(progressBar.length) {
        progressBar.each(function () {
            var Self = $(this);
            Self.appear(function () {
            var progressValue = Self.data('value');
            Self.find('.progress-bar').animate({
                width:progressValue+'%'           
            }, 1000);
            });
        })
        }
    });


    // magnific popup init
    $(".popup-gallery").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });



    // scroll to top
    $(window).scroll(function () {

        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            $("#scroll-top").fadeIn('slow');
        } else {
            $("#scroll-top").fadeOut('slow');
        }
    });

    $("#scroll-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1500);
        return false;
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass("fixed-top");
        } else {
            $('.navbar').removeClass("fixed-top");
        }
    });


    // // countdown
    // if ($('#countdown').length) {
    //     $('#countdown').countdown('2028/01/30', function (event) {
    //         $(this).html(event.strftime('' + '<div class="row">' + '<div class="col countdown-single">' + '<h2 class="mb-0">%-D</h2>' + '<h5 class="mb-0">Day%!d</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%H</h2>' + '<h5 class="mb-0">Hours</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%M</h2>' + '<h5 class="mb-0">Minutes</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%S</h2>' + '<h5 class="mb-0">Seconds</h5>' + '</div>' + '</div>'));
    //     });
    // }


    // project filter
    $(window).on('load', function () {
        if ($(".filter-box").children().length > 0) {
            $(".filter-box").isotope({
                itemSelector: '.filter-item',
                masonry: {
                    columnWidth: 1
                },
            });

            $('.filter-btns').on('click', 'li', function () {
                var filterValue = $(this).attr('data-filter');
                $(".filter-box").isotope({ filter: filterValue });
            });

            $(".filter-btns li").each(function () {
                $(this).on("click", function () {
                    $(this).siblings("li.active").removeClass("active");
                    $(this).addClass("active");
                });
            });
        }
    });


    // copywrite date
    let date = new Date().getFullYear();
    $("#date").html(date);


    // nice select
    $(document).ready(function() {
        $('.select').niceSelect();
    });


    // advanced search
    $('.advanced-search').click(function(){
        $('.advanced-search-menu').toggle();
    });


  

    // profile image btn
    $(".profile-img-btn").click(function () {
        $(".profile-img-file").click(); 
   });


    // property images upload
    $(".property-img-upload").click(function () {
        $(".property-img-file").click(); 
   });


    // message bottom scroll
    if($('.message-content-info').length){
        $(function () {
            var chatbox = $('.message-content-info');
            var chatheight = chatbox[0].scrollHeight;
            chatbox.scrollTop(chatheight);
        });
    }

})(jQuery);






    var propertyListing = new Swiper(".property-listing-slider", {
      slidesPerView: "auto",
      spaceBetween: 24,
      freeMode: true,
      autoplay: {
        delay: 2000,
      },
      breakpoints: {
        0: {
          slidesPerView: "auto",
          spaceBetween: 15,
        },
        576: {
          slidesPerView: "auto",
          spaceBetween: 24,
        },
      },
    });
   
    var listingImg = new Swiper(".listing-img", {
        slidesPerView: "auto",
        spaceBetween: 24,
        freeMode: true,
          // If we need pagination
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        breakpoints: {
          0: {
            slidesPerView: "auto",
            spaceBetween: 15,
          },
          576: {
            slidesPerView: "auto",
            spaceBetween: 24,
          },
        },
      });
      
      const dropdownMenus = document.querySelectorAll('.div-menu');
      const dropdownTriggers = document.querySelectorAll('.div-btn');
      function toggleDropdown(menuId, triggerElement) {
        // Close all dropdowns
       
  
        dropdownMenus.forEach(menu => {
          menu.classList.remove('visible');
          menu.setAttribute('aria-hidden', 'true');
        });
  
        dropdownTriggers.forEach(trigger => {
          trigger.classList.remove('rotate-r');
        });
  
        // Toggle the clicked dropdown
        const dropdownMenu = document.getElementById(menuId);
        const isVisible = dropdownMenu.classList.contains('visible');
  
        // If it was not visible, show it and rotate its trigger
        if (!isVisible) {
          dropdownMenu.classList.add('visible');
          dropdownMenu.setAttribute('aria-hidden', 'false');
          triggerElement.classList.add('rotate-r');
        }
      }
      function closeAllDropdowns() {
    
  
        dropdownMenus.forEach(menu => {
          menu.classList.remove('visible');
          menu.setAttribute('aria-hidden', 'true');
        });
  
        dropdownTriggers.forEach(trigger => {
          trigger.classList.remove('rotate-r');
        });
      }
      document.addEventListener('click', function (event) {
        const isDropdown = event.target.closest('.div-btn');
        const isMenu = event.target.closest('.div-menu');
  
        // Close all dropdowns if the click is outside a dropdown or menu
        if (!isDropdown && !isMenu) {
          closeAllDropdowns();
        }
      });
     
      const slides = document.querySelectorAll(".main-slider .swiper-slide").length;

      const mainSwiper = new Swiper(".main-slider", {
          slidesPerView: slides < 3 ? slides : 3, // Automatically set based on the number of slides
          spaceBetween: 5,
          loop: slides > 1, // Disable loop if there's only 1 slide
          autoplay: {
              delay: 3000,
          },
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
          },
          breakpoints: {
              0: {
                  slidesPerView: 1,
              },
              450: {
                  slidesPerView: slides < 2 ? slides : 2, // Handle if less than 2 slides
              },
              600: {
                  slidesPerView: slides < 3 ? slides : 3, // Handle if less than 3 slides
              },
          },
      });
    // document.querySelector('.whats-input').addEventListener('change', function() {
    //   const whatsDiv = document.querySelector('.whats-div');
    //   if (this.checked) {
    //     whatsDiv.style.display = 'none';
    //   } else {
    //     whatsDiv.style.display = 'block';
    //   }
    // });




    document.addEventListener('DOMContentLoaded', function () {
      const whatsInput = document.querySelector('.whats-input');
      if (whatsInput) {
          whatsInput.addEventListener('change', function() {
              const whatsDiv = document.querySelector('.whats-div');
              if (this.checked) {
                  whatsDiv.style.display = 'none';
              } else {
                  whatsDiv.style.display = 'block';
              }
          });
      } 
  });
  
    function toggleLike(element) {
      const icon = element.querySelector("i"); 
      if (icon.classList.contains("bi-suit-heart")) {
        icon.classList.remove("bi-suit-heart");
        icon.classList.add("bi-suit-heart-fill");
      } else {
        icon.classList.remove("bi-suit-heart-fill");
        icon.classList.add("bi-suit-heart");
      }
    }
   
      // price slider
    //   var priceRange = document.getElementById('price-range');
    //   var priceRangeInput = document.getElementById('priceRange');
  
    //   // Initialize the NoUISlider
    //   noUiSlider.create(priceRange, {
    //       start: [10000, 50000], // Initial values
    //       step: 500,            // Step value
    //       range: {
    //           min: 0,           // Minimum value
    //           max: 90000        // Maximum value
    //       },
    //       connect: true,        // Show connected range
    //       direction: 'rtl',     // Right-to-left direction
    //       format: {
    //           to: function (value) {
    //               return Math.round(value); // For internal value manipulation
    //           },
    //           from: function (value) {
    //               return Number(value);
    //           }
    //       }
    //   });
  
    //   // Function to format and update the input
    //   function updatePriceRange(values) {
    //       priceRangeInput.value = values[0].toLocaleString() + " ريال " + " - " + values[1].toLocaleString() + " ريال";
    //   }
  
    //   // Update the input initially
    //   updatePriceRange(priceRange.noUiSlider.get());
  
    //   // Update the input on slider movement
    //   priceRange.noUiSlider.on('update', function (values) {
    //       updatePriceRange(values);
    //   });
  
    $(function () {
        $('.filter-price').each(function (i, element) {
            const min = $(element).data('min');
            const max = $(element).data('max');
            const from = $(element).data('from');
            const to = $(element).data('to');
            const slider = element.querySelector('.filter-price__slider');

            noUiSlider.create(slider, {
                start: [from, to],
                connect: true,
                direction: 'rtl',
                range: {
                    'min': min,
                    'max': max
                }
            });

            const titleValues = [
                $(element).find('.filter-price__min-value')[0],
                $(element).find('.filter-price__max-value')[0]
            ];

            slider.noUiSlider.on('update', function (values, handle) {
                titleValues[handle].innerHTML = values[handle];
            });
        });
    });
  
  
  
  
  
      // $(function() {
  
      //     $(".price-range").slider({
      //       step: 500,
      //       range: true, 
      //       direction: 'rtl',
      //       min: 0, 
      //       max: 90000, 
      //       values: [10000, 50000], 
      //       slide: function(event, ui)
      //       {$(".priceRange").val( ui.values[0].toLocaleString() + " ريال " + " - " + ui.values[1].toLocaleString()+ " ريال ");}
      //     });
      //     $(".priceRange").val( $(".price-range").slider("values", 0).toLocaleString()+ " ريال " +"  -  "  + $(".price-range").slider("values", 1).toLocaleString()+ " ريال");
      // });
    //   $(function() {
    //       $(".space-range").slider({
    //         step: 1,
    //         range: true, 
    //         direction: 'rtl',
    //         min: 0, 
    //         max: 1000, 
    //         values: [100, 300], 
    //         slide: function(event, uim)
    //         {$(".spaceRange").val( uim.values[0].toLocaleString() + " م " + " - " + uim.values[1].toLocaleString()+ " م ");}
    //       });
    //       $(".spaceRange").val( $(".space-range").slider("values", 0).toLocaleString()+ " م " +"  -  "  + $(".space-range").slider("values", 1).toLocaleString()+ " م");
    //   });