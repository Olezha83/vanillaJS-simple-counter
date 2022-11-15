const [
  totalCount,
  incrementCount,
  decrementCount,
  resetCounter,
  counterStep,
  resetCounterStep,
  resetBoth,
  stepValue,
] = [
  'total-count',
  'decrement-count',
  'increment-count',
  'reset-counter',
  'counter-step',
  'reset-counter-step',
  'reset-both',
  'step-value',
].map((item) => document.getElementById(item))

let count = 0

const setCount = (counterValue) => (totalCount.innerText = `${counterValue}`)

setCount(count)

stepValue.innerText = counterStep.value

decrementCount.onclick = () => {
  count += +counterStep.value
  setCount(count)
}

incrementCount.onclick = () => {
  count -= +counterStep.value
  setCount(count)
}

resetCounter.onclick = () => {
  count = 0
  setCount(count)
}

resetCounterStep.onclick = () => {
  counterStep.value = 1
  stepValue.innerText = counterStep.value
}

resetBoth.onclick = () => {
  resetCounter.onclick()
  resetCounterStep.onclick()
}

counterStep.onchange = () => {
  stepValue.innerText = counterStep.value
}

counterStep.onmousemove = () => {
  stepValue.innerText = counterStep.value
}
