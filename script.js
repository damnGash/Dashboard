function latBar() {
  const body = document.body
  const iconlb = document.querySelector("#Lat-Bar ion-icon")

    if (body.classList.contains("open")) {
    body.classList.remove("open")
    iconlb.setAttribute("name", "ellipsis-vertical")
  } else {
    body.classList.add("open")
    iconlb.setAttribute("name", "menu")
  }
}
