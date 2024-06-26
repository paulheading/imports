import { store } from "~scripts/helpers";

let $build_button = document.querySelector("[data-title='build']");

function listenForButtonClicks({ currentTarget }) {
  if (!currentTarget) return;

  if (!store.selected.config) return;
}

function listenForBuildButton() {
  $build_button.addEventListener("click", listenForButtonClicks);
}

export { $build_button, listenForBuildButton };
