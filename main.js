const btns = document.querySelectorAll('.tictac__button');
const buttonRetry = document.querySelector('.main-page__retry');
let array = [];
let count = true;
let draw = true;

let obj = [
	{ '1': 0, '2': 1, '3': 2, class: '_h1' },
	{ '1': 3, '2': 4, '3': 5, class: '_h2' },
	{ '1': 6, '2': 7, '3': 8, class: '_h3' },
	{ '1': 0, '2': 3, '3': 6, class: '_v1' },
	{ '1': 1, '2': 4, '3': 7, class: '_v2' },
	{ '1': 2, '2': 5, '3': 8, class: '_v3' },
	{ '1': 0, '2': 4, '3': 8, class: '_c1' },
	{ '1': 2, '2': 4, '3': 6, class: '_c2' },
];


btns.forEach(element => {
	array.push(element)
});


function addClasses(e) {
	if (e.target.classList.contains('tictac__button') && !(e.target.classList.contains('cross')) && !(e.target.classList.contains('zero'))) {
		if (count) {
			e.target.classList.add('cross')
		} else {
			e.target.classList.add('zero')
		}
		count = !count
		checkWinner('cross')
		checkWinner('zero')
	}
	checkDraw()
}

document.addEventListener("click", addClasses);

function deleteClasses() {
	btns.forEach(element => {
		element.classList = 'tictac__button'
	});

	count = true
	draw = true
	document.querySelector('.main-page__tictac').className = 'main-page__tictac tictac'
	document.addEventListener("click", addClasses);
}

buttonRetry.addEventListener("click", deleteClasses);


function checkWinner(el) {
	obj.forEach(element => {
		if (array[element[1]].classList.contains(el) && array[element[2]].classList.contains(el) && array[element[3]].classList.contains(el)) {
			count = true
			draw = false
			document.querySelector('.tictac').classList.add(element.class)
			document.removeEventListener('click', addClasses)
			return
		}
	});
}

function checkDraw() {
	let countDraw = 0;
	array.forEach(element => {
		if (element.classList.length === 2) {
			countDraw++
		}
	});
	if (countDraw === 9 && draw === true) {
		alert('Ничья')
		document.removeEventListener('click', addClasses)
		draw = true
	}
}
