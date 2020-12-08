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
		let node = [];
		let div = document.createElement('div');
		div.setAttribute('class', 'drop-zone');
		let li = document.createElement('li');
		li.setAttribute('id', 'myDraggableElement');
		li.setAttribute('draggable', 'true');
		li.appendChild(document.createTextNode(input));
		let span = document.createElement('span');
		span.appendChild(document.createTextNode('x'));
		span.setAttribute('class', 'close');
		li.appendChild(span);
		div.appendChild(li);

		let item = div;

		item.addEventListener('click', function () {
			this.querySelector('li').classList.toggle('checked');
		});
		item.querySelector('span').addEventListener('click', function () {
			item.style.display = 'none';
		});
		return item;
	}
	const addButton = document.querySelector('#addBtn');
	addButton.addEventListener('click', function () {
		let userInput = document.querySelector('#input').value;
		document.querySelector('#input').value = '';
		document.querySelector('ul').insertAdjacentElement('afterbegin', addItem(userInput));
		drag();
	});

	// drag-items
	function drag() {
		document.querySelectorAll('#myDraggableElement').forEach((dragItem) => {
			dragItem.addEventListener('dragstart', (e) => {
				e.dataTransfer.setData('text/plain', dragItem.id);
				console.log(e);
			});
			document.querySelectorAll('.drop-zone').forEach((dropZone) => {
				dropZone.addEventListener('dragover', (e) => {
					e.preventDefault();
				});
				dropZone.addEventListener('drop', (e) => {
					e.preventDefault();
					const droppedElementId = e.dataTransfer.getData('text/plain');
					const droppedElement = document.getElementById(`${droppedElementId}`);
					dropZone.appendChild(droppedElement);
				});
			});
		});
	}
});
