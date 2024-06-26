import { store } from "~scripts/helpers";
import { $build_button } from "~scripts/components/buttons/build";

let $select_buttons = document.querySelectorAll(".card button.select");

let active = "data-active";

function deselectOtherButtons(button, currentTarget) {
  let notSelected = button !== currentTarget;

  if (notSelected) {
    let card = button.closest(".card");
    let targets = [button, card];

    targets.forEach((item) => item.setAttribute(active, "false"));
  }
}

function listenForButtonClicks({ currentTarget }) {
  let isActive = currentTarget.getAttribute(active) == "true";

  let card = currentTarget.closest(".card");

  let title = currentTarget.getAttribute("data-title").toLowerCase();

  let data = store.cards[title];

  if (!data) return;

  let targets = [currentTarget, card, $build_button];

  if (!isActive) {
    store.selected.config = store.cards[title].config;

    targets.forEach((item) => item.setAttribute(active, "true"));

    $select_buttons.forEach(function (item) {
      deselectOtherButtons(item, currentTarget);
    });
  } else {
    store.selected.config = [];

    targets.forEach((item) => item.setAttribute(active, "false"));
  }
}

export default function () {
  $select_buttons.forEach(function (button) {
    button.addEventListener("click", listenForButtonClicks);
  });
}
