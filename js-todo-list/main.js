// TO DO

window.addEventListener('DOMContentLoaded', function () {
	// items-completed
	let items = document.querySelectorAll('ul li').forEach((item) => {
		item.addEventListener('click', function () {
			item.classList.toggle('checked');
		});
	});

	// items-delete
	let crosses = document.querySelectorAll('ul li span').forEach((cross) => {
		cross.addEventListener('click', function () {
			cross.parentElement.style.display = 'none';
		});
	});
});
