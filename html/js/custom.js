/*--- Tooltip Initialization ----*/
jQuery(document).ready(function(){
    jQuery('[data-toggle="tooltip"]').tooltip();
    toggleNav();
  });

  /*--- Popover Initialization ----*/
  $(document).ready(function(){
    $('[data-toggle="popover"]').popover();
  });


  /*--- WOW Initialization ----*/
  new WOW().init();


/*---- Owl Carousel start--------*/
// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel();
// });
// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     items:4,
//     autoplay:true,
//     margin:10,
//     autoplayTimeout:5000,
//     loop:true,
//     nav:true,
//     dots:false,

//       responsive:{
//           0:{
//               items:1,
//               nav:false
//           },
//           600:{
//               items:1
//           },
//           1000:{
//               items:1
//         }
//       }
// });
/*---- Owl Carousel End--------*/



/*---- marquee start--------*/

            const speed = 3; // pixels at frame
            const gap = getComputedStyle(document.querySelector("body")).getPropertyValue(
              "--gap"
            ); // IMPORTANT: value should be equal to --gap variable at css
            const marquee = document.querySelector("#marquee");

            const newItem = () => {
              return marquee.querySelector("div").cloneNode(true);
            };

            const numerify = (str) => {
              return +str.replaceAll(/[^\d-]/g, "");
            };

            const fillMarquee = () => {
              while (
                marquee.querySelectorAll("div").length < 2 ||
                (marquee.querySelector("div").clientWidth + numerify(gap)) *
                  marquee.querySelectorAll("div").length -
                  numerify(gap) <
                  window.innerWidth * 1.5
              ) {
                marquee.append(newItem());
              }

              marquee.querySelectorAll("div").forEach((item) => {
                if (item.style.position !== "absolute") item.style.position = "relative";
              });
            };
            fillMarquee();
            window.addEventListener("resize", fillMarquee);

            const render = () => {
              marquee.querySelectorAll("div").forEach((item) => {
                if (item.offsetLeft < 0 && item.offsetLeft < -item.offsetWidth) {
                  marquee.querySelectorAll("div").forEach((e) => {
                    e.style.left = numerify(gap) / 2 - 1 + "px";
                  });
                  item.remove();
                  marquee.append(newItem());
                }
                item.style.left = `${numerify(item.style.left) - speed}px`;
              });
              requestAnimationFrame(render);
            };

            requestAnimationFrame(() => {
              render();
            });

/*---- marquee end--------*/




