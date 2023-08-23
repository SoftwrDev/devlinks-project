document.querySelector("#switch button").addEventListener("click", () => {
  const htmlDoc = document.querySelector("html")

  if (htmlDoc.classList.contains("theme-light")) {
    htmlDoc.classList.remove("theme-light")
    return
  }
  htmlDoc.classList.add("theme-light")
})
