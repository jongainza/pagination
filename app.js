import fetchFollowers from "./utils/fetchFollowers.js";
import displayFollowers from "./utils/displayFollowers.js";
import paginate from "./utils/paginate.js";
import displayButtons from "./utils/displayButtons.js";

const btnContainer = document.querySelector(".btn-container");

let index = 5;
let pages = [];

const setUpUI = () => {
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
};

const initialize = async () => {
  const followers = await fetchFollowers();
  pages = paginate(followers);
  setUpUI();
};

btnContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-container")) {
    return;
  }
  if (e.target.classList.contains("page-btn")) {
    index = parseInt(e.target.dataset.index);
  }
  if (e.target.classList.contains("prev-btn")) {
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
  }
  if (e.target.classList.contains("next-btn")) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
    }
  }
  setUpUI();
});
window.addEventListener("DOMContentLoaded", initialize);
