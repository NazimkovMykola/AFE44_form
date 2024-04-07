const icon = document.querySelector("img")
const input = document.querySelector("#pass")

icon.addEventListener("click", (e) => {
    const src = e.target.src.split('/')[3]
  if (src === "699007.png") {
    e.target.src = "view.png"
    input.type = "password"
  } else {
    e.target.src = "699007.png"
    input.type = "text"
  }
})


const btn = document.querySelector('.submit')
btn.addEventListener('click', (e)=> {
  e.preventDefault()
const form = document.forms.myFirstForm

const formData = new FormData(form)
for (let [name, value] of formData) {
  console.log(`${name} = ${value}`)
}
})
