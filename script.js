const quesBtn = document.querySelectorAll("li .ques");

let lastQues = null;
function questionHandler(e) {
  e.preventDefault();
  if (lastQues == this) {
    this.classList.toggle("ques--active");
  } else {
    quesBtn.forEach((btn) => {
      btn.classList.remove("ques--active");
    });

    this.classList.add("ques--active");
  }

  lastQues = this;
}

quesBtn.forEach((btn) => btn.addEventListener("click", questionHandler));
