document.getElementById('contactForm').addEventListener('submit', function (event) {
	event.preventDefault()

	const formData = new FormData(this)

	fetch(this.getAttribute('action'), {
		method: 'POST',
		body: formData,
	})
		.then(response => {
			if (response.ok) {
				this.reset()
				return response.text()
			} else {
				throw new Error('Wystąpił błąd.')
			}
		})
		.then(data => {
			const msgStatus = document.querySelector('.msg-status')
			msgStatus.textContent = data
			msgStatus.classList.add('succes')
			msgStatus.textContent = 'wiadomość została wysłana!'
			setTimeout(() => {
				msgStatus.textContent = ''
				msgStatus.classList.remove('succes')
				msgStatus.textContent = 'Wystąpił błąd'
			}, 3000)
		})
		.catch(error => {
			const msgStatus = document.querySelector('.msg-status')
			msgStatus.textContent = error.message
			msgStatus.classList.add('error')

			setTimeout(() => {
				msgStatus.textContent = ''
				msgStatus.classList.remove('error')
			}, 3000)
		})
})
