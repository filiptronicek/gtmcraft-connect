<?php

$status = json_decode(file_get_contents('https://api.mcsrvstat.us/2/gtmcraft.trnck.dev'));

//Show the version
echo $status->version;

//Show a list of players
foreach ($status->players->list as $player) {
	echo $player.'<br />';
}