const chk = document.getElementById("chk");
const cont = document.querySelector(".container");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const hg = document.querySelector(".heading");
const hgp = document.querySelector(".heading-p");
const btn = document.querySelector(".btn");
const languages = {
  eng: "Unlock the Power of Creativity with Figma!",
  engp: "Ready to elevate your design game?",
  engbtn: "Try Figma now",
  rus: "Разблокируйте Сила Креативность с Фигмой!",
  rusp: "Готов поднять свой уровень дизайнерская игра?",
  rusbtn: "Попробовать",
  uzb: "Qulfini ochingning kuchi Ijodkorlik Figma bilan!",
  uzbp: "Dizayn o'yiningizni oshirishga tayyormisiz?",
  uzbbtm: "sinab ko'ring",
};
let i = 2;
chk.addEventListener("click", () => {
  if (i % 2 == 0) {
    cont.style.color = "black";
    cont.style.paddingLeft = "590px";
  } else {
    cont.style.color = "white";
    cont.style.paddingLeft = "0";
  }
  i++;
});

btn2.addEventListener("click", () => {
  hg.textContent = languages.rus;
  hgp.textContent = languages.rusp;
  btn.textContent = languages.rusbtn;
  hg.style.fontFamily = "sans-serif";
  hgp.style.fontFamily = "sans-serif";
  btn.style.fontFamily = "sans-serif";
});
btn3.addEventListener("click", () => {
  hg.textContent = languages.uzb;
  hgp.textContent = languages.uzbp;
  btn.textContent = languages.uzbbtm;
  hg.style.fontFamily = "sans-serif";
  hgp.style.fontFamily = "sans-serif";
  btn.style.fontFamily = "sans-serif";
});
btn1.addEventListener("click", () => {
  hg.textContent = languages.eng;
  hgp.textContent = languages.engp;
  btn.textContent = languages.engbtn;
  hg.style.fontFamily = "sans-serif";
  hgp.style.fontFamily = "sans-serif";
  btn.style.fontFamily = "sans-serif";
});
