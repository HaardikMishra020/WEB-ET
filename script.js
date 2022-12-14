const wrapper = document.querySelector(".wrapper");
const header = document.querySelector(".header");
wrapper.addEventListener("scroll", (e) => {
  e.target.scrollTop > 30
    ? header.classList.add("header-shadow")
    : header.classList.remove("header-shadow");
});
const jobCards = document.querySelectorAll(".jb-cd");
const logo = document.querySelector(".logo");
const jobLogos = document.querySelector(".job-logos");
const jobDetailTitle = document.querySelector(
  ".job-explain-content .jb-cd-title"
);
const jobBg = document.querySelector(".job-bg");
jobCards.forEach((jobCard) => {
  jobCard.addEventListener("click", () => {
    const number = Math.floor(Math.random() * 10);
    const url = `https://unsplash.it/640/425?image=${number}`;
    jobBg.src = url;
    const logo = jobCard.querySelector("svg");
    const bg = logo.style.backgroundColor;
    console.log(bg);
    jobBg.style.background = bg;
    const title = jobCard.querySelector(".jb-cd-title");
    jobDetailTitle.textContent = title.textContent;
    jobLogos.innerHTML = logo.outerHTML;
    wrapper.classList.add("detail-page");
    wrapper.scrollTop = 0;
  });
});
logo.addEventListener("click", () => {
  wrapper.classList.remove("detail-page");
  wrapper.scrollTop = 0;
  jobBg.style.background = bg;
});
