import "./style.css";

const host = import.meta.env.VITE_HOST;

const apiUrl = `https://api.mcsrvstat.us/2/${host}`;
const ipSpan = document.getElementById("ip");
const onlineSpan = document.getElementById("online");
const playerSpan = document.getElementById("players");
const playersWrapper = document.getElementById("players-wrapper");
const versionSpan = document.getElementById("version");

const { title } = document;

const getStatus = async () => {
  if (!onlineSpan || !ipSpan || !playerSpan || !playersWrapper || !versionSpan) {
    console.error("Missing elements", { onlineSpan, ipSpan, playerSpan, playersWrapper, versionSpan });
    return;
  }

  const resp = await fetch(apiUrl);
  const data = await resp.json();

  onlineSpan.innerText = data.online ? "yes" : "no";
  ipSpan.innerText = data.hostname || data.ip;

  if (data.online) {
    versionSpan.innerText = data.version;

    const players = Object.entries(data?.players?.uuid || {});
    playersWrapper.style.display = "inline";
    if (players.length > 0) {
      document.title = `(${players.length} online) ${title}`;
    } else {
      document.title = title;
      playerSpan.innerHTML = "no one playin' rn :(";
    }

    playerSpan.innerHTML = "";
    for (const [username, uuid] of players) {
      const player = document.createElement("div");
      player.className = "player";

      const img = document.createElement("img");
      img.src = `https://crafatar.com/avatars/${uuid}?size=256`;
      player.appendChild(img);

      const usernameSpan = document.createElement("span");
      usernameSpan.innerText = username;
      player.appendChild(usernameSpan);

      playerSpan.appendChild(player);
    }
  } else {
    playersWrapper.style.display = "none";
  }
};

getStatus();
setInterval(getStatus, 10_000);
