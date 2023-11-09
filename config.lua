Config = Config or {}

Config.Guild_ID = ''  --server id
Config.FormattedToken = ''   --server bot token

Config.EnablePriorityColor = true  -- Toggle key to enable or disable custom color for priority holder
Config.PriorityColor = {
    --[[ {
        role = '835412914332237836', -- discord role
        color = {255, 0, 0} -- color code(rgb)
    } ]]
}
Config.EnableIcon = true  -- Toggle key to enable or disable custom icon for discord roles
Config.Icons = {
    --[[ {
        role = '835412914332237836', -- discord role
        icon = 'fa-solid fa-person-military-rifle' -- font awesome icon ex:("fa-solid fa-person-military-rifle")
    } ]]
}

Config.ViewIdDistance = 10.0  -- viewing distance for player overhead id

Config.MouseKey = 238  -- mouse key value to interact with list(prefer not to change)
Config.ColorOnVoiceToggle = true  -- Toggle key to enable or disable color on voice active
Config.ColorCodeOnVoice = {0, 0, 255}  -- Voice Active color code value (r, g, b)


Config.Cooldown = 0 -- do not change


Config.PlayerIdentifier = { -- configure what you want to show in playerlist [name(steam name), steam2(steam 2 dec), steam3(steam 3 hex), license(r* license), discord(discord user id), fivem(fivem user id)]
    header = 'steam2', -- name/steam2/steam3/license/discord/fivem (header is the main identifier)
    list = { -- name/steam2/steam3/license/discord/fivem (list is the sublist of identifiers)
        'name',
        'steam3',
        'license',
        'discord',
    }
}

Config.RecentIdentifier = { -- configure what you want to show in recent dc list [name(steam name), steam2(steam 2 dec), steam3(steam 3 hex), license(r* license), discord(discord user id), fivem(fivem user id)]
    header = 'steam2', -- name/steam2/steam3/license/discord/fivem (header is the main identifier)
    list = { -- name/steam2/steam3/license/discord/fivem (list is the sublist of identifiers)
        'name',
        'steam3',
        'license',
        'discord',
    }
}

Config.Services = {  -- Service Job Holder list
    {
        name = 'Police',
        color = '#387BFD',
        amount = 0, -- do not touch
        job = 'police'
    },
    {
        name = 'Ambulance',
        color = '#FF2020',
        amount = 0, -- do not touch
        job = 'ambulance'
    },
    {
        name = 'Mechanic',
        color = '#EEEEEE',
        amount = 0, -- do not touch
        job = 'mechanic'
    }
}
Config.Robberies = {  -- Robbery List
    {
        name = 'Bank Robbery',
        status = false, -- do not touch
        job = 'police', -- job holder name
        jobamount  = 1 -- required police to start heist

    },
    {
        name = 'Jewellery Robbery',
        status = false, -- do not touch
        job = 'police', -- job holder name
        jobamount  = 5 -- required police to start heist
    },
    {
        name = 'Pacific Bank Robbery',
        status = false, -- do not touch
        job = 'police', -- job holder name
        jobamount  = 6 -- required police to start heist
    }
}