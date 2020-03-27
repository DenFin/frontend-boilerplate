import navigation from './modules/misc/navigation';
import smoothScroll from './modules/misc/smoothScroll';
import scrollEvents from './modules/scrollEvents/scrollEvents';
import slider from './modules/misc/slider';
import notification from './modules/misc/notification';
import snap from './modules/misc/snap';
import splitting from './modules/misc/splitting';
import pageTransitions from './modules/misc/pageTransitions';

(function(){
  navigation();
  // slider();
  smoothScroll();
  // notification();
  scrollEvents();
  snap();
  splitting();
  // pageTransitions();
})();