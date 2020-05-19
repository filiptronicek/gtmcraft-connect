const fileUrl = "ip.txt";
const apiUrl = "/api";
const ipSpan = document.getElementById("ip");
const onlineSpan = document.getElementById("online");

async function getStatus(ip) {
  console.log("Getting status");
  const port = ip.split(":")[1];
  ip = ip.split(":")[0];
  const response = await fetch(`${apiUrl}?a=${ip}&p=${port}`, []).then(
    console.log("Got status")
  ); // resolves with response headers
  let result = await response.text(); // read body as json
  if(result !== "yes") {
    result = "no";
  }
  onlineSpan.innerText = result;
}

async function getIp() {
  console.log("Getting IP");
  const response = await fetch(fileUrl, []).then(console.log("Got IP")); // resolves with response headers
  let result = await response.text(); // read body as json
  ipSpan.innerText = result;
  getStatus(result);
}
getIp();
