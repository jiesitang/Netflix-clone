const quesBtn = document.querySelectorAll("li .ques");
const ansContent = document.querySelectorAll("li .ans");
const quesImg = document.querySelectorAll("li .ques img");

let lastQues = null;
function quesHandler(e) {
  e.preventDefault();
  if (lastQues == this.nextElementSibling) {
    lastQues.classList.toggle("ques--active");
  } else {
    ansContent.forEach((content) => {
      content.classList.remove("ques--active");
    });
    quesImg.forEach((img) => {
      img.classList.remove("active");
    });

    this.nextElementSibling.classList.add("ques--active");
  }

  this.querySelector("img").classList.toggle("active");

  lastQues = this.nextElementSibling;
}

quesBtn.forEach((btn) => btn.addEventListener("click", quesHandler));
