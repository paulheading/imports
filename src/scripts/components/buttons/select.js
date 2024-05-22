function listenForButtonClicks({ currentTarget }) {
  if (!currentTarget) return;
}

export default function () {
  let $select_buttons = document.querySelectorAll("button.select");

  $select_buttons.forEach(function (button) {
    button.addEventListener("click", listenForButtonClicks);
  });
}
