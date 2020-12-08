// TO DO

// items-completed
window.addEventListener('DOMContentLoaded', function () {
	let items = document.querySelectorAll('ul li').forEach((item) => {
		item.addEventListener('click', function () {
			item.classList.toggle('checked');
		});
	});
});
