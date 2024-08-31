const progressBarHTML = document.getElementById("html");
var progressValue = null;
if (progressBarHTML) progressValue = progressBarHTML.getAttribute("value");
const progressBar = document.querySelector(".html");
if (progressBar)
  progressBar.style.background = `radial-gradient(closest-side, white 79%, transparent 80% 100%),  conic-gradient(#204499 calc(${progressValue}* 1%), white 0)`;
// const progressPercentage = document.querySelector(".progress-bar");
// if (progressPercentage) progressPercentage.innerHTML = `${progressValue}%`;
