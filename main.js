const submitButton = document.querySelector("form input[type=submit]")
const form = document.querySelector("form")

form.addEventListener('submit', sendForm)

function sendForm(event){
  alert("submitted successfuly")
  event.preventDefault()
}
 