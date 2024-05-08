import { Buffer } from "buffer";
import { store } from "~scripts/helpers";

export default async function () {
  const url_params = new URLSearchParams(window.location.search);
  const code = url_params.get("code");

  const client_id = import.meta.env.PUBLIC_CLIENT_ID;
  const client_secret = import.meta.env.PUBLIC_CLIENT_SECRET;
  const redirect_uri = import.meta.env.PUBLIC_REDIRECT_URI;

  let body = new URLSearchParams({
    code,
    redirect_uri,
    grant_type: "authorization_code",
  });

  let response = await fetch("https://accounts.spotify.com/api/token", {
    method: "post",
    body,
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64"),
    },
  });

  let data = await response.json();

  store.access_token = data.access_token;
}
