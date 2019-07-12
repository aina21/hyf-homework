console.log("loaded");

function fetchApi() {
  const postsReq = fetch("https://jsonplaceholder.typicode.com/users/1/posts")
    .then(response => response.json())
    .then(delay => setTimeoutPromise(delay))
    .then(data => display(data));
}

function display(data) {
  const post = document.createElement("li");
  const listOfPosts = document.querySelector('.container > ul');
  data.forEach(item => {
    listOfPosts.appendChild(itemBlockDisplay(post,item));
  });


}

function itemBlockDisplay(post,item) {
  const title = document.createElement("h2");
  const body = document.createElement("p");
  title.innerHTML = item.title;
  body.innerHTML = item.body;
  post.appendChild(title);
  post.appendChild(body);
  return post;
}

/**
 *  return promise that resolves after the resolveAfter seconds has passed.
 *
 * @param {number} resolveAfter => seconds
 * @returns => promise
 */
function setTimeoutPromise(data) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 3000);
  });
}

fetchApi();
