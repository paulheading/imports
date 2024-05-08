import { store, getData } from "~scripts/helpers";

export default async function () {
  let user = await getData("me");

  store.user = {
    ...user,
    first_name: user.display_name.split(" ")[0],
  };
}
