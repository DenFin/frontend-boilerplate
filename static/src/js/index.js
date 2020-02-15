import navigation from './modules/navigation';
import smoothScroll from './modules/smoothScroll';
import scrollEvents from './modules/scrollEvents';

import slider from './modules/slider';
import notification from './modules/notification';

(function(){
  navigation();
  slider();
  smoothScroll();
  notification();
  // scrollEvents();
})();