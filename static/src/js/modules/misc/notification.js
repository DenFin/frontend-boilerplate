export default function(){

    const notification = document.querySelector(".notification")

    window.addEventListener("scroll", () => {
        setTimeout(() => {
            notification.style.display = "none"
        }, 2000)
    })

}