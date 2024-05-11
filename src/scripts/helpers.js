const store = {
  loaded: {
    callback: false,
  },
};

async function getData(endpoint) {
  if (!store.access_token) window.location.replace("/");

  let response = await fetch("https://api.spotify.com/v1/" + endpoint, {
    method: "get",
    headers: {
      Authorization: "Bearer " + store.access_token,
    },
  });

  let data = await response.json();

  return data;
}

export { store, getData };
