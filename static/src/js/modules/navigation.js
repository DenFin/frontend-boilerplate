export default function() {

  const navToggle   = document.querySelector(".nav-toggle");
  const navOverlay  = document.querySelector(".nav-overlay")
  const navLinks    = document.querySelectorAll(".nav-overlay a")

  console.log(navLinks)

  navToggle.addEventListener("click", () => {
    console.log("Test")
    navOverlay.classList.toggle("active")
  })

  navLinks.forEach( link => {
    link.addEventListener("click", () => {
      navOverlay.classList.remove("active")
    })
  })

}
