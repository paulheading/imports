function listenForButtonClicks({ currentTarget }) {
  if (!currentTarget) return;

  let active = "data-active";

  let isActive = currentTarget.getAttribute(active) == "true";

  let card = currentTarget.closest(".card");

  currentTarget.setAttribute(active, isActive ? "false" : "true");

  card.setAttribute(active, isActive ? "false" : "true");
}

export default function () {
  let $select_buttons = document.querySelectorAll("button.select");

  $select_buttons.forEach(function (button) {
    button.addEventListener("click", listenForButtonClicks);
  });
}
