const inputs = document.querySelectorAll('.controls input')
console.log(inputs)
function updateVariable(){
  const suffix = this.dataset.sizing || ''
  console.log(suffix)
  document.documentElement.style.setProperty(`--${this.name}` , this.value+suffix)
}
inputs.forEach(input => {
  input.addEventListener("change", updateVariable)
});