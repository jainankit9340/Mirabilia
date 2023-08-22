jQuery("#carousel-a").owlCarousel({
    autoplay: true,
    rewind: true, /* use rewind if you don't want loop */
    /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: false,
    loop: true,
    items:1
});
$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 2,
        margin: 10,
        loop: true
    });
});
jQuery("#carousel-b").owlCarousel({
    autoplay: true,
    rewind: true, /* use rewind if you don't want loop */
    margin: 20,
    /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    navText: ["<button class='btn btn-dark me-2'><i class='fa fa-chevron-left'></button>","<button class='btn btn-dark'><i class='fa fa-chevron-right'></button>"],
    loop: true,
    responsive: {
        0: {
        items: 1
        },

        600: {
        items: 3
        },

        1024: {
        items: 4
        },

        1366: {
        items: 4
        }
    }
});


document.getElementById('emailForm').addEventListener('submit', function (event) {
   event.preventDefault();

   // Initialize EmailJS with your user ID
   emailjs.init("niEXZnm77mp7j6cWd");

   // Prepare email parameters
   var params = {
       to_email: 'jainankit9340@gmail.com',
       from_name: document.getElementById("name").value,
       from_email: document.getElementById("email").value,
       from_mnumber: "Mobile Number: " + document.getElementById("Mnumber").value
   };

   // Send email
   emailjs.send("service_vkojx1z", "template_7ajif0i" , params)
       .then(function(response) {
           console.log('Email sent:', response);
           document.getElementById("down_broch").click();
           document.getElementById("close_modal").click();
       }, function(error) {
           console.error('Email error:', error);
           alert("An error occurred while sending the email.");
       });

   // Clear form fields
   document.getElementById('emailForm').reset();
});


document.getElementById('requestQuote').addEventListener('submit', function (event) {
  event.preventDefault();

  // Initialize EmailJS with your user ID
  emailjs.init("niEXZnm77mp7j6cWd");

  // Prepare email parameters
   var selectedBHKOptions = [];
   var bhkCheckboxes = document.getElementsByName("bhk_option");
   
   // Loop through checkboxes to get selected values
   for (var i = 0; i < bhkCheckboxes.length; i++) {
       if (bhkCheckboxes[i].checked) {
           selectedBHKOptions.push(bhkCheckboxes[i].value);
       }
   }

  // Prepare email parameters
  var params = {
      to_email: 'pavanimirabiliahomes@gmail.com',
      from_name: document.getElementById("nameb").value,
      from_email: document.getElementById("emailb").value,
      from_mnumber: "Mobile Number: " + document.getElementById("mnumberb").value,
      from_bhk: "Enquired for : " + selectedBHKOptions.join(", "),
      from_date: "Visit Date :" + document.getElementById("date").value
  };

  // Send email
  emailjs.send("service_vkojx1z", "template_9761r5c" , params)
      .then(function(response) {
          console.log('Email sent:', response);
          alert("Your request has been submitted successfully. One of our team member will reach to you soon.");
          document.getElementById("close_modal2").click();
      }, function(error) {
          console.error('Email error:', error);
          alert("An error occurred while sending the email.");
      });

  // Clear form fields
  document.getElementById('requestQuote').reset();
});



var lightbox = GLightbox();
        lightbox.on('open', (target) => {
            console.log('lightbox opened');
        });
        var lightboxDescription = GLightbox({
            selector: '.glightbox2'
        });
        var lightboxVideo = GLightbox({
            selector: '.glightbox3'
        });
        lightboxVideo.on('slide_changed', ({ prev, current }) => {
            console.log('Prev slide', prev);
            console.log('Current slide', current);

            const { slideIndex, slideNode, slideConfig, player } = current;

            if (player) {
                if (!player.ready) {
                    // If player is not ready
                    player.on('ready', (event) => {
                        // Do something when video is ready
                    });
                }

                player.on('play', (event) => {
                    console.log('Started play');
                });

                player.on('volumechange', (event) => {
                    console.log('Volume change');
                });

                player.on('ended', (event) => {
                    console.log('Video ended');
                });
            }
        });

        var lightboxInlineIframe = GLightbox({
            selector: '.glightbox4'
        });

        (function() {
            var _ = v;

            var scrollerDesc = mctracker();
            scrollerDesc.setup({
                element: _('.box-container').toArray(),
                offsetBottom: '20%',
                once: true,
            }).onStepEnter(function(response) {
                var list = _(response.element).find('li');
                list.forEach(function(item, i) {
                    var delay = i * 150 / 1000;
                    item = _(item);
                    item.attr('style', 'transition-delay: ' + delay + 's;');
                })

                list.addClass('show')
            });
        }());

        var lightbox = GLightbox();
        lightbox.on('open', (target) => {
            console.log('lightbox opened');
        });
        var lightboxDescription = GLightbox({
            selector: '.glightbox2'
        });
        var lightboxVideo = GLightbox({
            selector: '.glightbox3'
        });
        lightboxVideo.on('slide_changed', ({ prev, current }) => {
            console.log('Prev slide', prev);
            console.log('Current slide', current);

            const { slideIndex, slideNode, slideConfig, player } = current;

            if (player) {
                if (!player.ready) {
                    // If player is not ready
                    player.on('ready', (event) => {
                        // Do something when video is ready
                    });
                }

                player.on('play', (event) => {
                    console.log('Started play');
                });

                player.on('volumechange', (event) => {
                    console.log('Volume change');
                });

                player.on('ended', (event) => {
                    console.log('Video ended');
                });
            }
        });

        var lightboxInlineIframe = GLightbox({
            selector: '.glightbox4'
        });

        (function() {
            var _ = v;

            var scrollerDesc = mctracker();
            scrollerDesc.setup({
                element: _('.floor-container').toArray(),
                offsetBottom: '20%',
                once: true,
            }).onStepEnter(function(response) {
                var list = _(response.element).find('li');
                list.forEach(function(item, i) {
                    var delay = i * 150 / 1000;
                    item = _(item);
                    item.attr('style', 'transition-delay: ' + delay + 's;');
                })

                list.addClass('show')
            });
        }());