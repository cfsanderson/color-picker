// [x] Create sliders that serve as inputs for hue, saturation, lightness and values, e.g. <input type="range" name="hue">.

// [x] Create a "swatch" element that will show the current color.

// Show the current color as a ready to copy-and-paste CSS color function in hsl format, e.g. hsla(72, 90%, 80%, 0.53).

// Respond to the correct events to update both the swatch and the color function to show current color when adjusting the sliders.

let hue = 232
let saturation = 7
let lightness = 20
let alpha = 1

const getHSL = () => {
  return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
}

const main = () => {
  const swatch = document.querySelector('.swatch div')

  const hueInput = document.querySelector('input[name=hue]')
  hueInput.addEventListener('input', () => {
    hue = hueInput.value
    swatch.style.backgroundColor = getHSL()
    document.querySelector('p').textContent = getHSL()
  })

  const satInput = document.querySelector('input[name=saturation]')
  satInput.addEventListener('input', () => {
    saturation = satInput.value
    swatch.style.backgroundColor = getHSL()
    document.querySelector('p').textContent = getHSL()
  })

  const lightInput = document.querySelector('input[name=lightness]')
  lightInput.addEventListener('input', () => {
    lightness = lightInput.value
    swatch.style.backgroundColor = getHSL()
    document.querySelector('p').textContent = getHSL()
  })

  const alphaInput = document.querySelector('input[name=alpha]')
  alphaInput.addEventListener('input', () => {
    alpha = alphaInput.value
    swatch.style.backgroundColor = getHSL()
    document.querySelector('p').textContent = getHSL()
  })
}

document.addEventListener('DOMContentLoaded', main)

// const displayFibbs = (event) => {
//   if (event) event.preventDefault()
//   const input = document.querySelector('input[name=n]')
//   const n = parseInt(input.value)
//
//   const fibbs = fibbonacci(n)
//
//   const list = document.querySelector('ul')
//
//   while (list.lastChild) {
//     list.removeChild(list.lastChild)
//   }
//
//   for (let i = 0; i < fibbs.length; i++) {
//     const li = document.createElement('li')
//     li.textContent = fibbs[i]
//
//     const hue = Math.round((i / n) * 255)
//
//     li.style.backgroundColor = `hsl(${hue}, 100%, 50%)`
//
//     list.appendChild(li)
//   }
// }
//
// const fibbonacci = (n) => {
//   let sequence = []
//   let temp
//   let a = 0
//   let b = 1
//
//   while (n >= 0) {
//     sequence.push(a)
//     temp = a
//     a = a + b
//     b = temp
//     n--
//   }
//
//   return sequence
// }
