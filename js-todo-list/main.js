// TO DO

window.addEventListener('DOMContentLoaded', function () {
	// items-completed
	document.querySelectorAll('ul li').forEach((item) => {
		item.addEventListener('click', function () {
			item.classList.toggle('checked');
		});
	});

	// items-delete
	document.querySelectorAll('ul li span').forEach((cross) => {
		cross.addEventListener('click', function () {
			cross.parentElement.style.display = 'none';
		});
	});

	// add-items
	function addItem(input) {
		let item = document.createElement('li');
		item.innerHTML = `${input}<span class="close">x</span>`;
		item.addEventListener('click', function () {
			this.classList.toggle('checked');
		});
		item.querySelector('span').addEventListener('click', function () {
			item.style.display = 'none';
		});
		return item;
	}
	const addButton = document.querySelector('#addBtn');
	addButton.addEventListener('click', function () {
		let userInput = document.querySelector('#input').value;
		document.querySelector('ul').insertAdjacentElement('afterbegin', addItem(userInput));
	});
});
