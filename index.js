const images = ['fruits.jpg', 'meat.jpg', 'pancakes.jpg', 'ramen.jpg', 'salad.jpg']

const frame = document.getElementById('slideshow')
const slide = document.createElement('img')
slide.src = `media/${images[0]}`

const pLeft = document.createElement('p')
const pRight = document.createElement('p')
const leftArrow = document.createElement('i')
const rightArrow = document.createElement('i')
leftArrow.classList.add('arrow')
rightArrow.classList.add('arrow')
leftArrow.classList.add('left')
rightArrow.classList.add('right')

pLeft.appendChild(leftArrow)
pRight.appendChild(rightArrow)

frame.appendChild(pLeft)
frame.appendChild(slide)
frame.appendChild(pRight)

function next () {
  start = slide.src.indexOf('media/')
  src = slide.src.slice(start)
  src = src.replace('media/', '')
  index = images.indexOf(src)
  if (index < 4) {
    index++
  }
  slide.src = `media/${images[index]}`
}

function previous () {
  start = slide.src.indexOf('media/')
  src = slide.src.slice(start)
  src = src.replace('media/', '')
  index = images.indexOf(src)
  if (index > 0) {
    index--
  }
  slide.src = `media/${images[index]}`
}

rightArrow.addEventListener('click', next)
leftArrow.addEventListener('click', previous)

function changeImage () {
  let i = 1  
  setInterval(() => {
    slide.src = `media/${images[i]}`
    if (i === (images.length - 1)) {
      i = 0
    } else {
      i++
    }
  }, 5000)
}

// changeImage()