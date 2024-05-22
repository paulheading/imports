import { gsap } from "gsap";

function listenForButtonClicks({ currentTarget }) {
  if (!currentTarget) return;

  let $card = currentTarget.closest(".card");

  let ease = "linear";
  let duration = 0.3;
  let defaults = { ease, duration };

  let tl = gsap.timeline({ defaults });

  function onComplete() {
    let $title = $card.querySelector("h2");
    let $content = $card.querySelector(".card-content");
    let $config = $card.querySelector(".card-config");
    let $img = $card.querySelector("img");

    let imagepath = "/" + $title.innerText.toLowerCase() + ".jpg";
    let display = "block";

    let contentIsHidden = $title.style.display == "none";

    if (!contentIsHidden) {
      $img.src = "/config.jpg";
      gsap.set([$title, $content], { display: "none" });
      gsap.set($config, { display });
    } else {
      $img.src = imagepath;
      gsap.set([$title, $content], { display });
      gsap.set($config, { display: "none" });
    }
  }

  // prettier-ignore
  tl.to($card, { rotateY: 90, onComplete })
    .to($card, { rotateY: 0 });
}

export default function () {
  let $info_buttons = document.querySelectorAll("button.info");

  $info_buttons.forEach(function (button) {
    button.addEventListener("click", listenForButtonClicks);
  });
}
