import fetchFollowers from "./utils/fetchFollowers.js";
import displayFollowers from "./utils/displayFollowers.js";

const initialize = async () => {
  const followers = await fetchFollowers();
  displayFollowers(followers);
};

window.addEventListener("DOMContentLoaded", initialize);
