import Parallax from 'parallax-js';

export default function() {
    

    var scene = document.getElementById('parallax')
    var parallaxInstance = new Parallax(scene, {
        relativeInput: true
    })


}