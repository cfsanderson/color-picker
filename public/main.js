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
