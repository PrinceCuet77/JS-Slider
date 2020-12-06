let slides = document.querySelectorAll('.slide')
let nextBtn = document.querySelector('.nextBtn')
let prevBtn = document.querySelector('.prevBtn')

slides.forEach(function (slide, index) {
	slide.style.left = `${index * 100}%`
})

let counter = 0
prevBtn.addEventListener('click', function () {
	counter--
	carousel()
})

nextBtn.addEventListener('click', function () {
	counter++
	carousel()
})

function carousel() {
	if (counter === slides.length - 1) {
		nextBtn.style.display = 'none'
	} else {
		nextBtn.style.display = 'block'
	}

	if (counter > 0) {
		prevBtn.style.display = 'block'
	} else {
		prevBtn.style.display = 'none'
	}

	// another solution for circular slide
	// if (counter === slides.length) {
	// 	counter = 0
	// }
	// else if (counter < 0) {
	// 	counter = slides.length - 1
    // }

	slides.forEach(function (slide) {
		slide.style.transform = `translateX(-${counter * 100}%)`
	})
}
prevBtn.style.display = 'none'
