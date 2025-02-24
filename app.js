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

window.addEventListener("DOMContentLoaded", initialize);
