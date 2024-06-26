import { getAuthorization } from "~scripts/services";

let $button = document.querySelector("[data-title='login']");

$button.addEventListener("click", getAuthorization);
