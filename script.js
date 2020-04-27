const fileUrl = "ip.txt";
const apiUrl = "/api";
const ipSpan = document.getElementById("ip");
const onlineSpan = document.getElementById("online");

async function getStatus(ip) {
    console.log("Getting status");
    const response = await fetch(apiUrl+"?a="+ip, []).then(console.log("Got status")); // resolves with response headers
    let result = await response.text(); // read body as json
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
