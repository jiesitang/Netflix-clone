const quesBtn = document.querySelectorAll("li .ques");
const inputEmail = document.querySelectorAll(".input-address");
const startBtn = document.querySelector(".start-btn");
const links = document.querySelectorAll("a");
const movieRank = document.querySelector(".movie-ranking");
const ranks = document.querySelector(".ranks");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

links.forEach((link) =>
  link.addEventListener("click", (e) => {
    e.preventDefault();
  })
);

function btnRankHandler() {
  // 左邊btn 如果滑動大於0則出現 否則不出現
  if (this.scrollLeft > 0) {
    prevBtn.style.transform = "translateX(0)";
    // this.style.paddingLeft = "36px";
  } else {
    prevBtn.style.transform = "";
    // this.style.paddingLeft = "0px";
  }

  // 右邊btn 如果滑動到最右邊則不出現 否則出現
  if (this.scrollLeft + this.clientWidth >= this.scrollWidth) {
    nextBtn.style.transform = "translateX(100%)";
    // this.style.paddingRight = "0px";
  } else {
    nextBtn.style.transform = "";
    // this.style.paddingRight = "36px";
  }
}

// 計算寬度加上margin
const rankWidth = document.querySelector(".rank").offsetWidth + 20;

function prevRank() {
  ranks.scrollLeft -=
    Math.floor(ranks.clientWidth / rankWidth) * rankWidth -
    (ranks.scrollLeft + ranks.clientWidth >= ranks.scrollWidth ? 26 : 0);
  // 如果滑動到最右邊就 -36+10 否則 -0
  // 36為btn的寬度 +10為單邊的margin
}
function nextRank() {
  ranks.scrollLeft +=
    Math.floor(ranks.clientWidth / rankWidth) * rankWidth -
    (ranks.scrollLeft > 0 ? 0 : 36);
  // 如果滑動不在最左邊就 -0 否則 -36
  // 36為btn的寬度
}

ranks.addEventListener("scroll", btnRankHandler);
prevBtn.addEventListener("click", prevRank);
nextBtn.addEventListener("click", nextRank);

// 紀錄是否正在觀察
// let isObserving = false;
// let startBtnActive = false;
// function resizeHandler() {
//   startBtn.classList.remove("start-btn--active");

//   // 大於600不觀察
//   if (window.innerWidth > 600) {
//     if (isObserving) {
//       stopObserving();
//     }
//     return;
//   }

//   // 小於等於600且尚未觀察 啟動觀察
//   if (!isObserving) {
//     startObserving();
//   }
// }

// function startBtnHandler(entries) {
//   const [entry] = entries;
//   console.log(entry);
//   if (entry.isIntersecting) {
//     startBtn.classList.remove("start-btn--active");
//     // startBtnActive = false;
//   } else {
//     startBtn.classList.add("start-btn--active");
//     // startBtnActive = true;
//   }
// }

// const observer = new IntersectionObserver(startBtnHandler, {
//   root: null,
//   threshold: 0.0,
// });

// // 啟動觀察
// function startObserving() {
//   inputEmail.forEach((input) => observer.observe(input));
//   isObserving = true;
// }

// // 停止觀察
// function stopObserving() {
//   inputEmail.forEach((input) => observer.unobserve(input));
//   isObserving = false;
// }

// window.addEventListener("resize", resizeHandler);

// resizeHandler();

// 常見問題手風琴功能
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
