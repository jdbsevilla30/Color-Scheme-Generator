const submitBtn = document.getElementById("submit");

let colorsArray = [];

submitBtn.addEventListener("submit", function (e) {
  e.preventDefault();
  colorsArray = [];
  let colorer = document.getElementById("kulay").value;
  let type = document.getElementById("scheme-mode").value;
  let colored = colorer.replace("#", ""); //seed
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colored}&mode=${type}&count=4`
  )
    .then((res) => res.json())
    .then((data) => {
      colorsArray.push(colored);
      data.colors.forEach(function (color) {
        const { clean, value } = color.hex;
        // console.log(clean); //hex
        colorsArray.push(clean);
      });
      document.getElementById(
        "color-container2"
      ).style.backgroundColor = `#${colorsArray[1]}`;
    });
  console.log(type); //input list
});
