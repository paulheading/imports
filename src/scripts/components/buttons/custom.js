import { gsap } from "gsap";

let $custom_button = document.querySelector("button.custom");

let $cards = document.querySelectorAll(".card");

let $person_cards = document.querySelectorAll(".card:not(.custom)");

let $custom_card = document.querySelector(".custom.card");

let ease = "linear";

let duration = 0.3;

let defaults = { ease, duration };

let display = "inline-block";

$custom_button.addEventListener("click", function ({ currentTarget }) {
  if (!currentTarget) return;

  let clicked = currentTarget.getAttribute("clicked");

  let clearProps = "all";

  let opacity = 1;

  if (clicked == "true") {
    currentTarget.setAttribute("clicked", "false");

    currentTarget.innerText = "Custom job please";

    let tl = gsap.timeline({ defaults });

    function onComplete() {
      let tl = gsap.timeline();

      gsap.set($custom_card, { clearProps: "all" });

      gsap.set($person_cards, { clearProps: "display" });

      tl.to($person_cards, { rotateY: 0, opacity: 1 });
    }

    // prettier-ignore
    tl.to($custom_card, { rotateY: 90, opacity: 0, onComplete });
  } else {
    currentTarget.setAttribute("clicked", "true");

    currentTarget.innerText = "Set menu please";

    let tl = gsap.timeline({ defaults });

    function onComplete() {
      let tl = gsap.timeline();

      gsap.set($person_cards, { display: "none" });

      gsap.set($custom_card, { display, rotateY: 90, opacity: 0 });

      tl.to($custom_card, { rotateY: 0, opacity: 1 });
    }

    // prettier-ignore
    tl.to($person_cards, { rotateY: 90, opacity: 0, onComplete })
  }
});
