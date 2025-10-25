// Scripts globaux
(() => {
  'use strict'

  // validation bootstrap pour les forms
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        event.preventDefault()
        // placeholder: show a simple success message
        alert('Merci — votre formulaire a été envoyé (simulation).')
        form.reset()
      }
      form.classList.add('was-validated')
    }, false)
  })
})()