import { setAccessToken, setUser } from "~scripts/services";
import listenForInfoButtons from "~scripts/components/buttons/info";
import { store } from "~scripts/helpers";

// import NProgress from "nprogress";

// NProgress.configure({ showSpinner: false });

// const onStart = () => NProgress.start();

// const onComplete = () => NProgress.done();

function LoadDOM() {
  let $not_loaded = document.querySelector("[data-state='not-loaded']");

  let $loaded = document.querySelector("[data-state='loaded']");

  $not_loaded.remove();

  $loaded.style.display = "block";

  store.loaded.callback = true;
}

function createFirstName() {
  let $first_name = document.querySelector("#firstname");

  $first_name.innerHTML = store.user.first_name;

  console.log("user: ", store);
}

setAccessToken()
  .then(setUser)
  .then(LoadDOM)
  .then(createFirstName)
  .then(listenForInfoButtons);
