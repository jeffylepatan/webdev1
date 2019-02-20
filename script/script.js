window.onscroll = function() {scrollEffect()};

function scrollEffect() {
	var scrollWin = document.body.scrollTop || document.documentElement.scrollTop;
	var scrollH = document.documentElement.scrollHeight || document.documentElement.clientHeight;
	var clientW = document.documentElement.clientWidth;
	var scrollP = (scrollWin / scrollH) * 100;

	if (clientW < 1001 && clientW > 600) {
		if (scrollP > 15){
			//second part entrance animation
			document.getElementsByClassName('part2-1hidden')[0].setAttribute('class','part2-1');
			document.getElementsByClassName('part2-2hidden')[0].setAttribute('class','part2-2');
			document.getElementsByClassName('part2-3hidden')[0].setAttribute('class','part2-3');
		} else {
			//second part exit
			document.getElementsByClassName('part2-1')[0].setAttribute('class','part2-1hidden');
			document.getElementsByClassName('part2-2')[0].setAttribute('class','part2-2hidden');
			document.getElementsByClassName('part2-3')[0].setAttribute('class','part2-3hidden');
		}
	} else if (clientW < 601) {
		if (scrollP > 5){
			//second part entrance animation
			document.getElementsByClassName('part2-1hidden')[0].setAttribute('class','part2-1');
			document.getElementsByClassName('part2-2hidden')[0].setAttribute('class','part2-2');
			document.getElementsByClassName('part2-3hidden')[0].setAttribute('class','part2-3');
		} else {
			//second part exit
			document.getElementsByClassName('part2-1')[0].setAttribute('class','part2-1hidden');
			document.getElementsByClassName('part2-2')[0].setAttribute('class','part2-2hidden');
			document.getElementsByClassName('part2-3')[0].setAttribute('class','part2-3hidden');
		}
	} else {
		if (scrollP > 15){
			//second part entrance animation
			document.getElementsByClassName('part2-1hidden')[0].setAttribute('class','part2-1');
			document.getElementsByClassName('part2-2hidden')[0].setAttribute('class','part2-2');
			document.getElementsByClassName('part2-3hidden')[0].setAttribute('class','part2-3');
		} else {
			//second part exit
			document.getElementsByClassName('part2-1')[0].setAttribute('class','part2-1hidden');
			document.getElementsByClassName('part2-2')[0].setAttribute('class','part2-2hidden');
			document.getElementsByClassName('part2-3')[0].setAttribute('class','part2-3hidden');
		}
	}
}