import { store } from "~scripts/helpers";
// import { $build_button } from "~scripts/components/buttons/build";

let $custom_select_button = document.querySelector(
  ".card button.select[data-title=Custom]"
);

function listenForButtonClicks({ currentTarget }) {
  let card = currentTarget.closest(".card");

  let $toggle_items = card.querySelectorAll(".toggle-list li");

  store.selected.config = [];

  $toggle_items.forEach(function (item) {
    let $input = item.querySelector("input");
    let $title = item.querySelector(".title");

    if ($input.checked) store.selected.config.push($title.innerText);
  });
}

export default function () {
  $custom_select_button.addEventListener("click", listenForButtonClicks);
}
