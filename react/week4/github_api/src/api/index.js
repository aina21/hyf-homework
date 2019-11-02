const ROOT_URL = "https://api.github.com/search";

const ENDPOINTS = {
  USERS: "/users?q="
};

// NOTE: you don't need await if returning (response.json() is async)
async function getUser(username) {
  const response = await fetch(`${ROOT_URL}${ENDPOINTS.USERS}${username}`);
  return response.json();
}

export { getUser };
