import ScrollMagic from 'ScrollMagic'
import 'animation.gsap'
import 'debug.addIndicators'
import $ from  'jquery'



    export function pinSection(_trigger, _section, _duration, _offset, _indicators){

        if(_trigger && _section) {

            const controller = new ScrollMagic.Controller({
                addIndicators: _indicators
            })
            new ScrollMagic.Scene({
                triggerElement: _trigger,
                duration: _duration,
                triggerHook: "onLeave",
                offset: _offset
            })
            .setPin(_section)
            .addTo(controller)

        } else {
            if(!_trigger){
                console.error(`_trigger is null`)
            } else if(!_section) {
                console.error(`_section is null`)
            }
        }

    }

    export function blurBg(_trigger, _section, _duration, _offset, _indicators){

        const controller = new ScrollMagic.Controller({
            addIndicators: _indicators
        })

        const fadeIn = TweenMax.to(_section, 3, {className: "+=fadeIn"});

        new ScrollMagic.Scene({
            triggerElement: _trigger,
            duration: _duration,
            offset: _offset
        })
            .setTween(fadeIn)
            .addTo(controller)

    }

    export function inView(_trigger, _section, _indicators){
        const controller = new ScrollMagic.Controller({
            addIndicators: _indicators
        })

        new ScrollMagic.Scene({
            triggerElement: _trigger,
        })
            .setClassToggle(_section, "animate")
            .addTo(controller)
    }
