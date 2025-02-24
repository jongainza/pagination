const displayButtons = (btnContainer, pages, index) => {
  let btns = pages.map((page, pageIndex) => {
    return `
  <button class='page-btn ${
    index === pageIndex ? "active-btn" : ""
  }' data-index='${pageIndex}'>${pageIndex + 1}</button>
  `;
  });
  btns.push(`<button class='next-btn'>next</button>`);
  btns.unshift(`<button class='prev-btn'>prev</button>`);
  btnContainer.innerHTML = btns.join("");
};

export default displayButtons;
