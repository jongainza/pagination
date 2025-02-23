const URL = "https://api.github.com/users/michalbe/followers?per_page=100";

const fetchFollowers = async () => {
  const data = await fetch(URL);
  const followers = await data.json();

  return followers;
};

export default fetchFollowers;
