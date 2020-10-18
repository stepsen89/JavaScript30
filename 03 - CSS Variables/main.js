window.onload = () => {
  let img = document.querySelector("#img");

  //color
  const valBackground = document.querySelector('#base');
  valBackground.addEventListener("change", () => {
    document.documentElement.style.setProperty('--color', valBackground.value);
    document.querySelector(".hl").style.color = valBackground.value;
  });

  // spacing
  const valSpacing = document.querySelector('#spacing');
  valSpacing.addEventListener("mousemove", () => {
    document.documentElement.style.setProperty('--spacing', valSpacing.value + 'px')
  });

  // blur
  const valBlur = document.querySelector('#blur');
  valBlur.addEventListener("input", () => {
    document.documentElement.style.setProperty('--blur', valBlur.value + 'px')
  });
}