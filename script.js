var bombElement = document.getElementById("bomb"),
	bombHead = document.getElementById('bomb-head'),
	firstPart = document.getElementById('bomb-head-1'),
	secondPart = document.getElementById('bomb-head-2'),
	thirdPart = document.getElementById('bomb-head-3'),
	fourthPart = document.getElementById('bomb-head-4'),
	tailOne = document.getElementById('tail-1'),
	tailTwo = document.getElementById('tail-2'),
	tailThree = document.getElementById('tail-3'),
	tailFour = document.getElementById('tail-4'),
 	popup = document.getElementById("popup"),
  	cat = document.getElementById("cat"),
 	closeBtn = document.querySelectorAll(".close")[0];

bombElement.addEventListener("click", function() {	
		bombElement.classList.add('bomb-disactive');
		bombHead.classList.add("bomb-active");
		firstPart.classList.add('boom1');
		secondPart.classList.add('boom2');
		thirdPart.classList.add('boom3');
		fourthPart.classList.add('boom4');
		tailOne.classList.add('tail-disappear');
		tailTwo.classList.add('tail-disappear');
		tailThree.classList.add('tail-disappear');
		tailFour.classList.add('tail-disappear');
		popup.classList.add('visible');
		cat.classList.add('move');
})

closeBtn.addEventListener("click", function(e) {

	popup.classList.remove('visible');
})



