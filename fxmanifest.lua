fx_version 'cerulean'
game 'gta5'

description 'Player Scoreboard'
author 'Master Mind#8816'
version '1.0'

shared_scripts {
	'config.lua',
	'@ox_lib/init.lua'
}

server_scripts {
	'public/server.lua',
	'server/*.lua'
}

client_scripts {
	'public/client.lua',
	'client/*.lua'
}

ui_page 'html/index.html'

files {
	'html/**',
}

dependencies {
	'/onesync',
	'ox_lib'
}

lua54 'yes'
