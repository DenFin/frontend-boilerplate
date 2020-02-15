import ScrollMagic from 'ScrollMagic'
import 'animation.gsap'
// import 'debug.addIndicators'
import $ from  'jquery'

export default function() {

  var controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
      triggerElement: "#stick-1",
      duration: "100%", // the scene should last for a scroll distance of 100px
      offset: 50 // start this scene after scrolling for 50px
  })
      .setPin('#stick-1')
    //   .addIndicators()
      .addTo(controller); // assign the scene to the controller

  new ScrollMagic.Scene({
      triggerElement: "#stick-2",
      duration: "100%", // the scene should last for a scroll distance of 100px
      offset: 50 // start this scene after scrolling for 50px
  })
    .setPin('#stick-2')
    // .addIndicators()
    .addTo(controller); // assign the scene to the controller

  new ScrollMagic.Scene({
      triggerElement: "#stick-3",
      duration: "100%", // the scene should last for a scroll distance of 100px
      offset: 50 // start this scene after scrolling for 50px
  })
    .setPin('#stick-3')
    // .addIndicators()
    .addTo(controller); // assign the scene to the controller

}
