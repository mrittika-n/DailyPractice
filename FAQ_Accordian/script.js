"use strict";

const accordian = document.querySelectorAll(".accordian");

// for (let i = 0; i < arrowBtn.length; i++) {
//   arrowBtn[i].addEventListener("click", function () {
//     answer[i].style.display = "block";
//     //   arrowBtn.style.addAtribute = "transform:rotate(180degree)";
//   });
// }

accordian.forEach((acc) => {
  const answer = acc.querySelector(".answer");
  const arrowBtn = acc.querySelector(".icon");

  acc.addEventListener("click", () => {
    // arrowBtn.classList.toggle("active");
    // answer.classList.toggle("active");
    if (arrowBtn.classList.contains("active")) {
      arrowBtn.classList.remove("active");
      answer.style.maxHeight = null;
    } else {
      arrowBtn.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
