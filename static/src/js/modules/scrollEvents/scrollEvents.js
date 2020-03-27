import { pinSection, blurBg, inView } from './pinning.js';


export default function() {


  pinSection("#bg-1", "#bg-1", "100%", "0", false);
  pinSection("#bg-2", "#bg-2", "100%", "0", false);
  blurBg("#bg-2", "#image-2", "100%", "0", false)
  inView("#target", "#target", false)
  

}
 
