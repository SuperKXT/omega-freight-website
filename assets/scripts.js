function openContactForm() {
	document.getElementById('modalContainer').classList.add('open');
}

function closeContactForm(e) {
	if (e.target.id === 'modalClose' || e.target.id === 'submitButton' || e.target === e.currentTarget) {
		document.getElementById('modalContainer').classList.remove('open');
	}
}

function showMobileMenu() {

	document.getElementById('headerNav').classList.add('show');

}

function hideMobileMenu() {

	document.getElementById('headerNav').classList.remove('show');

}

document.addEventListener('click', function(e) {
	console.log(e.target)

	if (e.target.id === 'launchForm') {
		openContactForm();
	}
	else if (e.target.id === 'modalClose' || e.target.id === 'modalContainer') {
		closeContactForm(e);
	}
	else if (e.target.id === 'showMenu') {
		showMobileMenu();
	}
	else if (e.target.id === 'headerNav') {
		e.stopImmediatePropagation();
	}
	else if (document.getElementById('headerNav').classList.contains('show') && e.target.id !== 'headerNavList' && e.target.id !== 'headerNav') {
		hideMobileMenu();
	}

});

document.addEventListener('submit', function(e) {
	if (e.target.id === 'contactForm') {
		closeContactForm(e);
	}
});