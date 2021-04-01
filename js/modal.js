const modalLinks = document.querySelectorAll('.modal-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll("*.lock-padding");

let unlock = true;

const timeout = 800;

if (modalLinks.length > 0) {
	for (let index = 0; index < modalLinks.length; index++) {
		const modalLink = modalLinks[index];
		popupLink.addEventListener("click", function (e) {
			const modalName = modalLink.getAttribute('href').replace('#', '');
			const currentModal = document.getElementById(modalName);
			modalOpen(currentModal);
			e.preventDefault();
		})
	}
}