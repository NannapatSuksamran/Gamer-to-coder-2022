async function getUser() {
  let response = await fetch('https://gamertocoder.garena.co.th/api/minigames');
  let a = await fetch('https://gamertocoder.garena.co.th/api/assets');
  console.log(response);
  console.log(a);
  let data = await response.json();
  let data1 = await a.json();
  return data;
  return data1;
}

getUser().then(data => console.log(data)).then(data1 => console.log(data1));

fetch("https://gamertocoder.garena.co.th/api/minigames")
  .then((response) => {
    if (response.status !== 200) {
      return response.status;
    }
    return response.json();
  })