document.querySelector("#switch button").addEventListener("click", () => {
  const docEl = document.querySelector("html")

  if (docEl.classList.contains("theme-light")) {
    docEl.classList.remove("theme-light")
    return
  }

  docEl.classList.add("theme-light")
})
