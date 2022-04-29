const submitButton = document.querySelector("form input[type=submit]")
let inputName = document.querySelector("#nombre")
const form = document.querySelector("form")


form.addEventListener('submit', sendForm)

function sendForm(event){
  inputName = inputName.value
  console.log(inputName)
  alert(`Hello, ${inputName}! This is not sending emails. But if you want it to, let me know.`)
  event.preventDefault()
}
 