document.addEventListener('DOMContentLoaded', function() {

	// const circle = document.querySelector('.chart__circle')
	const circles = document.querySelectorAll('.chart__circle')

	const radius = circles[0].r.baseVal.value
	const circumference = 2 * Math.PI * radius

	circles.forEach(circle => {
		circle.style.strokeDasharray = `${circumference} ${circumference}`
		circle.style.strokeDashoffset = circumference
	})

	function setProgress(percent, i) {
		const offset = circumference - percent / 100 * circumference
		circles[i].style.strokeDashoffset = offset
	}

	const precent_1 = 32			//процент 1-й диаграммы
	const precent_2 = 39.1		//процент 2-й диаграммы
	setProgress(90, 0)
	// 1.1 - поправка, т.к. полная диаграмма 90%
	setProgress((precent_1 + precent_2) / 1.1, 1) 
	setProgress(precent_2 / 1.1, 2)
	

})