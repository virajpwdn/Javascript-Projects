let btn = document.querySelector("#btn");
let bulb = document.querySelector("#bulb");
let disNone = document.querySelector("#disNone");
let flag = 0;

btn.addEventListener("click", function () {
  if (flag === 1) {
    bulb.style.transition = "all 0.5s ease-in-out";
    bulb.style.opacity = "0";

    setTimeout(() => {
      bulb.style.display = "none";
      disNone.style.display = "inline";
      disNone.style.opacity = 1;
      disNone.style.transition = "all 0.5s ease-in-out"
    }, 500);

    btn.innerText = "Click to turn OFF"
    flag = 0;
  } else {
    disNone.style.transition = "all 0.5s ease-in-out";
    disNone.style.opacity = 0

    setTimeout(() => {
        disNone.style.display = "none";
        bulb.style.display = "inline";
        bulb.style.opacity = 1;
        bulb.style.transition = "all 0.5s ease-in-out"
    }, 500);
    flag = 1;
    btn.innerText = "Click to turn ON"
  }
});
