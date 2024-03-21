document.addEventListener('DOMContentLoaded', function () {
	const allNavItems = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.navbar-collapse')

	allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))

	const toggleBtns = document.querySelectorAll('.toggle-btn')

	toggleBtns.forEach(btn => {
		btn.addEventListener('click', function () {
			const itemBox = this.parentElement
			itemBox.classList.toggle('open')
			const toggleIcon = this.querySelector('.fa-solid')
			toggleIcon.classList.toggle('rotate')
		})
	})

	let isSticky = false

	window.addEventListener('scroll', function () {
		const navbar = document.getElementById('navbar')
		const screenWidth = window.innerWidth

		if (screenWidth <= 768) {
			if (window.scrollY > 150 && !isSticky) {
				navbar.classList.add('sticky')
				isSticky = true
			} else if (window.scrollY <= 150 && isSticky) {
				navbar.classList.remove('sticky')
				isSticky = false
			}
		} else if (screenWidth > 768) {
			if (window.scrollY > 210 && !isSticky) {
				navbar.classList.add('sticky')
				isSticky = true
			} else if (window.scrollY <= 210 && isSticky) {
				navbar.classList.remove('sticky')
				isSticky = false
			}
		}
	})
})
