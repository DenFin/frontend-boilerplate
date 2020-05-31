import $ from "jquery"
import slick from "slick-carousel"

export default function() {

    const $slickContainer = $(".slick-container")

    if ($slickContainer.length != 0) {
        $(".slick-container").slick({
            "arrows": true,
            "slidesToShow": 1
        });

    } else {
        console.error("There is no slick-container")
    }



}