let isPressed = false; //safety net so we don't f up our work
const colorSeed = document.getElementById("get-seed"); //seed value
document.getElementById("submit").addEventListener("submit", function (e) {
  e.preventDefault();
  if (!isPressed) {
    render();
  }
});
const render = () => {
  //call reset so our DOM and array won't be overflowed
  let colorsArray = [];
  let htmlString = ``;
  let colorString = ``;
  document.body.style.backgroundColor = colorSeed.value;
  const schemeMode = document.getElementById("scheme-mode").value;
  const colorContainer = document.getElementById("color-container"); //color container
  const colorNameContainer = document.getElementById("color-name-container");
  const seed = colorSeed.value.replace("#", ""); //we must remove the # because the hex doesnt accept #
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${seed}&mode=${schemeMode}&count=4`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      colorsArray.push(colorSeed.value.toUpperCase());
      data.colors.forEach(function (color) {
        colorsArray.push(color.hex.value); //colorsArray.push(clean) no # code
      });
      isPressed = false;
      colorsArray.map((colorScheme) => {
        htmlString += `<div class="color" style="background-color: ${colorScheme}"></div>`;
        colorString += `<h1 class="color-label">${colorScheme}</h1>`;
      });
      colorContainer.innerHTML = htmlString;
      colorNameContainer.innerHTML = colorString;
    });
};
colorSeed.value = "#" + Math.floor(Math.random() * 16777215).toString(16);

render();
