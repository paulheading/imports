import store from "~data/store";

export default async function (endpoint, body) {
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