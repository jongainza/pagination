const paginate = (followers) => {
  const personsPerPage = 9;
  const pages = Math.ceil(followers.length / personsPerPage);
  console.log(pages);
  const display = Array.from({ length: pages }, (_, index) => {
    const start = index * personsPerPage;
    return followers.slice(start, start + personsPerPage);
  });
  return display;
};

export default paginate;
