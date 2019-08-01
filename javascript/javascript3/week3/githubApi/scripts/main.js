const token = "2cac91fefcca28bbd3f554e44d5cc1d46db7e262";
const usernames = ["benna100", "aina21", "fatemeh-pakpour", "Laila1222"];

/**
 *
 *
 * @param {string} userName
 * @returns => promise
 */
function fetchApi(userName) {
  const url = `https://api.github.com/search/repositories?q=user:${userName}`;
  const promise = fetch(url, { headers: { Authorization: `token ${token}` } })
    .then(response => response.json())
    .then(data => data.items);

  return promise;
}

/**
 * combined promises
 *
 */
function combinedData() {
  Promise.all(usernames.map(user => fetchApi(user))).then(repositoryForAll => {
    repositoryForAll.forEach(repositoryForUser => {
      renderForUser(repositoryForUser);
    });
  });
}

/**
 * show repository for users
 *
 * @param {json} repositories
 */
function renderForUser(repositories) {
  console.log(repositories);
  const listOfAllUsers = document.querySelector("ul.list");
  const user = repositories[0].owner.login;
  const userElem = createList(listOfAllUsers, `${user}'s repositories`);

  listOfAllUsers.appendChild(userElem);
  const listOfRepositories = document.createElement("ul");
  repositories.forEach(repository => {
    const repositoryName = `${repository.name}: ${repository.html_url}`;
    createList(listOfRepositories, repositoryName);
  });
  userElem.appendChild(listOfRepositories);
}

/**
 *
 *
 * @param {DOM-element} parent
 * @param string data
 * @returns => DOM-element
 */
function createList(parent, data) {
  const list = document.createElement("li");
  list.innerHTML = data;
  parent.appendChild(list);
  return list;
}

combinedData();
