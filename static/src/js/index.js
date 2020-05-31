import navigation from './modules/misc/navigation';
import smoothScroll from './modules/misc/smoothScroll';
import scrollEvents from './modules/scrollEvents/scrollEvents';
import slider from './modules/misc/slider';
import notification from './modules/misc/notification';
import snap from './modules/misc/snap';
import splitting from './modules/misc/splitting';
import pageTransitions from './modules/misc/pageTransitions';
import parallax from './modules/misc/parallax';
import googleMaps from './modules/googleMaps';
import cookieHandling from './modules/misc/cookieHandling';

(function() {
    cookieHandling();
    notification();
    navigation();
    smoothScroll();
    scrollEvents();
    snap();
    splitting();
    parallax();
    slider();
    googleMaps();
    pageTransitions();
})();