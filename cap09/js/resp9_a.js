const resp = document.querySelector("p")

function countViewer() {
  if (!localStorage.getItem("visit")) {
    resp.innerText = "Welcome! This is your first visit to our website"
    localStorage.setItem("visit", 1)
    return
  } else {
    let visitCount = Number(localStorage.getItem("visit")) + 1
    resp.innerText = `We glad you're back! This is your ${visitCount} visit to our website.`
    localStorage.setItem("visit", visitCount)
  }
}

window.addEventListener("load", countViewer)

