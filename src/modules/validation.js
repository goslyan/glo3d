const calcForm = document.querySelector('.calc-block')

calcForm.addEventListener('input', () => {
    if (e.target.type === 'number') {
        e.target.value = e.target.value.replace(/\D/g, "")
    }
})
