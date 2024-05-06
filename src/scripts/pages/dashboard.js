import { getData } from "~scripts/helpers";

let $first_name = document.querySelector("#firstname");

let user = await getData("me");

user.first_name = user.display_name.split(" ")[0];

$first_name.innerHTML = user.first_name;

console.log("user: ", user);
