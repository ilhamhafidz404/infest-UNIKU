const body= document.querySelector('body');
const navbar= document.querySelector('.navbar');
const asideNav= document.querySelector('.asideNav');

window.addEventListener('scroll', function(){
	body.classList.toggle('colorize', window.scrollY>1500);
	navbar.classList.toggle('sticky', window.scrollY>0);
	body.classList.toggle('colorizer', window.scrollY>2800);
});

function showNav() {
	asideNav.classList.toggle('show');
}

function hiddenNav() {
	asideNav.classList.remove('show');
}

function upper() {
	const mobileNav= document.querySelector('.mobile');
	mobileNav.classList.toggle('up');
}

function swapImg(argument) {
	document.getElementById('swapImg'). src= argument;
}


function monoTheme() {
	const red= document.querySelector('.theme.red');
	const yellow= document.querySelector('.theme.yellow');
	const green= document.querySelector('.theme.green');
	const blue= document.querySelector('.theme.blue');
	red.classList.remove('red');
	yellow.classList.remove('yellow');
	green.classList.remove('green');
	blue.classList.remove('blue');
}

function colorTheme() {
	const red= document.querySelectorAll('.theme')[0];
	const yellow= document.querySelectorAll('.theme')[1];
	const green= document.querySelectorAll('.theme')[2];
	const blue= document.querySelectorAll('.theme')[3];
	red.classList.add('red');
	yellow.classList.add('yellow');
	green.classList.add('green');
	blue.classList.add('blue');
}

