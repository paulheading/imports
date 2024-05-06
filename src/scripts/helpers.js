import Cookies from "js-cookie";

async function getData(endpoint) {
  let response = await fetch("https://api.spotify.com/v1/" + endpoint, {
    method: "get",
    headers: {
      Authorization: "Bearer " + Cookies.get("access_token"),
    },
  });

  let data = await response.json();

  return data;
}

export { getData };
