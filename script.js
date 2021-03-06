const apiUrl = "https://api.mcsrvstat.us/2/gtmcraft.trnck.dev";
const ipSpan = document.getElementById("ip");
const onlineSpan = document.getElementById("online");
const playerSpan = document.getElementById("players");

const title = document.title;

function getStatus() {
    fetch(apiUrl).then(resp => resp.json()).then(resp => {
        onlineSpan.innerText = resp.online ? "yes" : "no";
        ipSpan.innerText = resp.hostname || resp.ip;

        if (resp.online) {
            var uuids = [];
            document.querySelector('.pls').style.display = "inline";
            for (const id in resp.players.uuid) { 
                // check if the property/key is defined in the object itself, not in parent
                if (resp.players.uuid.hasOwnProperty(id)) {
                    uuids.push(resp.players.uuid[id]);
                }
            }

            if (uuids.length === 0) {
                document.querySelector('.pls').style.display = "none";
            } else {
                document.title = `(${uuids.length} online) ${title}`;
            }

            // const images = uuids.map(uuid => `<img src="https://crafatar.com/avatars/${uuid}?size=40">`);
            players.innerHTML = resp.players.list.join(", ") || "no one playin' rn :(";
        } else {
            document.querySelector('.pls').style.display = "none";
        }
    });
}
getStatus();
setInterval(getStatus, 10000);
