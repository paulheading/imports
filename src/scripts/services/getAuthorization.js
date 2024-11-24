export default function () {
  const client_id = import.meta.env.PUBLIC_CLIENT_ID;
  const redirect_uri = import.meta.env.PUBLIC_REDIRECT_URI;

  let auth_query_parameters = new URLSearchParams({
    response_type: "code",
    client_id,
    scope: "user-library-read, playlist-modify-public, playlist-modify-private",
    redirect_uri,
  });

  window.location.replace(
    "https://accounts.spotify.com/authorize?" + auth_query_parameters.toString()
  );
}
