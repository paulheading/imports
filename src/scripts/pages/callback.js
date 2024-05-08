import { setAccessToken, setUser } from "~scripts/services";
import { store } from "~scripts/helpers";

setAccessToken()
  .then(setUser)
  .then(function () {
    let $first_name = document.querySelector("#firstname");

    $first_name.innerHTML = store.user.first_name;

    console.log("user: ", store);
  });
