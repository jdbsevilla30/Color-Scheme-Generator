let colorsArray = []; //where we will store our seed and our generated colors
const colorSeed = document.getElementById("get-seed"); //seed value
let isPressed = false;
let htmlString = ``;

document.getElementById("submit").addEventListener("submit", function (e) {
  e.preventDefault();
  if (!isPressed) {
    render();
  }
});

const render = () => {
  //call reset so our DOM and array won't be overflowed
  emptyElements();
  const schemeMode = document.getElementById("scheme-mode").value;
  const colorContainer = document.getElementById("color-container"); //color container
  const seed = colorSeed.value.replace("#", ""); //we must remove the # because the hex doesnt accept #

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${seed}&mode=${schemeMode}&count=4`
  )
    .then((res) => res.json())
    .then((data) => {
      colorsArray.push(colorSeed.value.toUpperCase());
      data.colors.forEach(function (color) {
        const { value /**clean */ } = color.hex;
        colorsArray.push(value); //colorsArray.push(clean) no # code
      });
      isPressed = false;
      colorsArray.map((colorScheme) => {
        htmlString += ` 
      
        <div class="color-flex" style="background-color: ${colorScheme}">color</div>
        `;
        console.log(htmlString);
      });
      colorContainer.innerHTML = htmlString;
    });
};

const generateColor = () => {
  colorSeed.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const emptyElements = () => {
  //resets the DOM and empties the array
  colorsArray = [];
  htmlString = ``;
  isPressed = true;
};

generateColor();
render();