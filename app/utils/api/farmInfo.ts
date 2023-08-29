export default async function fetchEntries() {
  const res = await fetch(
    `https://s4lajcdqnnp3yx3xwnk4nstbtm0zcekl.lambda-url.us-east-1.on.aws`
  );

  // console.log(res.json());

  return res.json();
}
