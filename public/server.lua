-- Commands
lib.addCommand('combat', {
    help = 'Get all nearby combat player list',
    params = {},
}, function(source)
    TriggerClientEvent("mm_scoreboard:show", source)
end)

lib.addCommand('cooldown', {
    help = 'Get all nearby combat player list',
    params = {
        {
            name = 'time',
            type = 'number',
            help = 'Cooldown Timer',
        }
    },
    restricted = 'group.admin'
}, function(source, args)
    TriggerEvent("mm_robbery:server:sync", args.time or 30)
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