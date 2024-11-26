let store = {
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
      intro: [
        `We’re all friends here. Let’s find your recent favs and share the love.`,
      ],
      img_path: "/cindy.jpg",
      config: ["Discovered this year", "Recommends included"],
    },
    badjo: {
      title: "BadJo",
      intro: [`Don’t waste my time. Fresh discoveries only. Get out.`],
      img_path: "/badjo.jpg",
      config: ["Released this year", "No recommends"],
    },
    custom: {
      title: "Custom",
      intro: [``],
      img_path: "/custom.jpg",
      config: [],
    },
  },
};

let getData = async function (endpoint) {
  if (!store.access_token) window.location.replace("/");

  let response = await fetch("https://api.spotify.com/v1/" + endpoint, {
    method: "get",
    headers: {
      Authorization: "Bearer " + store.access_token,
    },
  });

  let data = await response.json();

  return data;
};

let postData = async function (endpoint, body) {
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
};

export { store, getData, postData };
