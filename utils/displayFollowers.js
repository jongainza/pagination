const container = document.querySelector(".container");
const title = document.querySelector(".section-title h1");

const displayFollowers = (followers) => {
  title.textContent = "gitHub followers";

  container.innerHTML = followers
    .map((follower) => {
      console.log(follower);
      const { login: name, avatar_url: img, html_url } = follower;
      return `
  <article class="card">
           <img src=${img} alt="person" />
           <h4>${name}</h4>
           <a href ="${html_url}"class="btn">${name}</a>
         </article>
  `;
    })
    .join("");
};

export default displayFollowers;
