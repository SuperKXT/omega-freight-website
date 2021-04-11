function openContactForm() {
	document.getElementById('modalContainer').classList.add('open');
}

function closeContactForm(e) {
	if (e.target.id === 'modalClose' || e.target.id === 'submitButton' || e.target === e.currentTarget) {
		document.getElementById('modalContainer').classList.remove('open');
	}
}

document.getElementById('launchForm').addEventListener('click', openContactForm);

document.getElementById('modalClose').addEventListener('click', closeContactForm);

document.getElementById('modalContainer').addEventListener('click', closeContactForm);

document.getElementById('contactForm').addEventListener('submit', closeContactForm);