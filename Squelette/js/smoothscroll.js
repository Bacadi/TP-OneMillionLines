const myModal = document.getElementById('modal')
const myInput = document.getElementById('learn')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})