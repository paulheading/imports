const store = {
  selected: {
    config: [],
    tracks: [],
    playlist: {},
  },
  loaded: {
    callback: false,
  },
  cards: {
    cindy: {
      title: "Cindy",
      image_path: "/cindy.jpg",
      config: ["Discovered this year", "Recommends included"],
    },
    badjo: {
      title: "BadJo",
      image_path: "/badjo.jpg",
      config: ["Released this year", "No recommends"],
    },
    custom: {
      title: "Custom",
      image_path: "/custom.jpg",
      config: [],
    },
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

async function postData(endpoint, body) {
  if (!store.access_token) window.location.replace("/");

  let response = await fetch("https://api.spotify.com/v1/" + endpoint, {
    method: "post",
    headers: {
      Authorization: "Bearer " + store.access_token,
    },
    body: JSON.stringify({ ...body }),
  });

  let data = await response.json();

  return data;
}

export { store, getData, postData };
