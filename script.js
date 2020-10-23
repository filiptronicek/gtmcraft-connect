const fileUrl = "ip.txt";
const apiUrl = "https://api.mcsrvstat.us/2/gtmcraft.trnck.dev";
const ipSpan = document.getElementById("ip");
const onlineSpan = document.getElementById("online");
const playerSpan = document.getElementById("players");

function getStatus() {
fetch(apiUrl).then(resp => resp.json()).then(resp => {
    onlineSpan.innerText = resp.online ? "yes" : "no";
    ipSpan.innerText = resp.hostname || resp.ip;

    if (resp.online) {
        var uuids = [];
        for (const id in resp.players.uuid) { // check if the property/key is defined in the object itself, not in parent
            if (resp.players.uuid.hasOwnProperty(id)) {
                uuids.push(resp.players.uuid[id]);
            }
        }
        //const images = uuids.map(uuid => `<img src="https://crafatar.com/avatars/${uuid}?size=40">`);
        players.innerHTML = resp.players.list;
    }
});
}
getStatus();
setInterval(getStatus, 10000);