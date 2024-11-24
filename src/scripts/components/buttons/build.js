import { store, getData, postData } from "~scripts/helpers";
import { DateTime } from "luxon";

let $build_button = document.querySelector("[data-title='build']");

async function getTracks() {
  let this_years_tracks = true;
  let offset = 0;
  let limit = 20;

  while (this_years_tracks) {
    let { items } = await getData(`me/tracks?offset=${offset}`);

    items.forEach(function (item) {
      let { added_at } = item;
      let { year } = DateTime.fromISO(added_at).c;
      let added_this_year = year === 2024;

      if (added_this_year) {
        store.selected.tracks.push(item);
      } else if (this_years_tracks) {
        this_years_tracks = false;
      }
    });

    if (this_years_tracks) offset += limit;
  }
}

function releasedThisYear(item) {
  let { release_date } = item.track.album;
  let { year } = DateTime.fromISO(release_date).c;

  return year === 2023;
}

function prioritizeFewestPlays(a, b) {
  let a_score = a.track.popularity;
  let b_score = b.track.popularity;

  return a_score - b_score;
}

function addTracksToPlaylist(data) {
  postData("playlists/" + data.id + "/tracks", {
    uris: store.selected.tracks.map(function (item) {
      let { track } = item;
      return track.uri;
    }),
  });
}

function listenForButtonClicks({ currentTarget }) {
  if (!currentTarget) return;

  if (!store.selected.config) return;

  console.log("store selected config: ", store.selected.config);

  getTracks().then(function () {
    // if store.selected.config == "Released this year"
    store.selected.tracks = store.selected.tracks.filter(releasedThisYear);

    // if store.selected.config == "Prioritize fewest plays"
    store.selected.tracks.sort(prioritizeFewestPlays);

    postData("users/" + store.user.id + "/playlists", {
      name: "New Playlist 6",
      description: "New playlist description",
      public: false,
    }).then(function (data) {
      addTracksToPlaylist(data);
      console.log("selected tracks: ", store.selected.tracks);
    });
  });
}

function listenForBuildButton() {
  $build_button.addEventListener("click", listenForButtonClicks);
}

export { $build_button, listenForBuildButton };
