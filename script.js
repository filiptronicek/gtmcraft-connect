const fileUrl = "ip.txt";
const apiUrl = "https://isgmconline.now.sh/api";
const ipSpan = document.getElementById("ip");

async function getStatus(ip) {
    console.log("Getting status");
    const response = await fetch(apiUrl, []).then(console.log("Got status")); // resolves with response headers
    let result = await response.text(); // read body as json
    ipSpan.innerText = result;
}

async function getIp() {
  console.log("Getting IP");
  const response = await fetch(fileUrl, []).then(console.log("Got IP")); // resolves with response headers
  let result = await response.text(); // read body as json
  ipSpan.innerText = result;
  getStatus();
}
getIp();
