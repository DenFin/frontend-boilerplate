import Cookies from "js-cookie"

export default function() {

    const cookieOverlay = document.querySelector(".cookie-overlay")
    const cookieOptInForm = document.getElementById("cookieOptInForm")

    let cookies;


    console.log({ cookieOverlay, cookieOptInForm })


    if (cookieOptInForm) {

        cookieOptInForm.addEventListener("submit", function(e) {
            e.preventDefault();
            console.log(e.srcElement[0].checked)

            if (e.srcElement[0].checked) {
                Cookies.set('analytics', 'optIn')
            }

            if (e.srcElement[1].checked) {
                Cookies.set('googleMaps', 'optIn')
            }

            cookieOverlay.style.display = "none"
            location.reload();


        })
    }

    document.addEventListener("DOMContentLoaded", function() {
        console.log(checkForCookies())
        checkForCookies();
        if (cookies.visited) {
            console.log("%c Welcome back friend!", "color:white;font-family:monospace;font-size:16px;")
            cookieOverlay.style.display = "none"
        } else {
            console.log("%c Welcome first timer!", "color:green;font-family:cursive;font-size:16px;")
            Cookies.set('visited', 'true')
        }
    })


    function checkForCookies() {
        cookies = Cookies.get();
        return cookies;
    }





}