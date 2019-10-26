const ROOT_URL = "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

// NOTE: you don't need await if returning (response.json() is async)
async function getList() {
  const response = await fetch(`${ROOT_URL}`);
  return response.json();
}

export { getList };