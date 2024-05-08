import { getAuthorization } from "~scripts/services";

let $button = document.querySelector("#log-in");

$button.addEventListener("click", getAuthorization);
