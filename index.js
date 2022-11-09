fetch("https://www.thecolorapi.com/scheme?hex=EFEFEF&count=6")
  .then((res) => res.json())
  .then((data) => {
    data.colors.forEach(function (color) {
      const { clean, value } = color.hex;
      console.log(value)
      //console.log(color);
      //  console.log(color.hex.clean);
    });
  });
