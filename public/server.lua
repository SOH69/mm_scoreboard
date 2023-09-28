-- Commands
lib.addCommand('combat', {
    help = 'Get all nearby combat player list',
    params = {},
}, function(source)
    TriggerClientEvent("mm_scoreboard:show", source)
end)

lib.addCommand('cooldown', {
    help = 'Set Priority Cooldown',
    params = {
        {
            name = 'time',
            type = 'number',
            help = 'Cooldown Timer',
        }
    },
}, function(source, args)
    local src = source
    local Player = QBCore.Functions.GetPlayer(src)
    local PlayerData = Player.PlayerData
    if PlayerData.job.name == 'police' then
        TriggerEvent("mm_robbery:server:sync", args.time or 30)
    else
        local ndata = {
			title = 'Failed',
    		description = 'Not Verified',
    		type = 'error'
		}
        TriggerClientEvent('ox_lib:notify', src, ndata)
    end
end)

RegisterNetEvent("mm_scoreboard:server:banktrigger", function(status)
    Config.Robberies[1].status = status
    TriggerEvent("mm_robbery:server:sync", 30)
end)

RegisterNetEvent("mm_scoreboard:server:jewellerytrigger", function(status)
    Config.Robberies[2].status = status
    TriggerEvent("mm_robbery:server:sync", 30)
end)

RegisterNetEvent("mm_scoreboard:server:pacifictrigger", function(status)
    Config.Robberies[3].status = status
    TriggerEvent("mm_robbery:server:sync", 30)
end)