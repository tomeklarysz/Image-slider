const images = ['fruits.jpg', 'meat.jpg', 'pancakes.jpg', 'ramen.jpg', 'salad.jpg']

const frame = document.getElementById('slideshow')
const slide = document.createElement('img')
slide.src = `media/${images[0]}`
frame.appendChild(slide)

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

changeImage()