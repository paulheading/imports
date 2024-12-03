import { getData } from "~scripts/services";

let thisYearsTracks = true;
let offset = 0;
let limit = 20;
let results = [];

export default async function (callback) {
  // while (thisYearsTracks) {
  //   let { items } = await getData(`me/tracks?offset=${offset}`);

  //   let checkDateAdded = function (track) {
  //     if (getYearFromString(track.added_at) < currentYear) {
  //       thisYearsTracks = false;
  //     }
  //   };

  //   results = [
  //     ...results,
  //     ...items.filter((item) => byAlbumReleaseDate(item, checkDateAdded)),
  //   ];

  //   offset += limit;
  // }

  callback(results);
}
