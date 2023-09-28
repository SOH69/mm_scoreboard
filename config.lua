Config = Config or {}

Config.Guild_ID = ''  --server id
Config.FormattedToken = ''   --server bot token

Config.EnablePriorityColor = true  -- Toggle key to enable or disable custom color for priority holder
Config.PriorityColor = {
    -- ['835412914332237836'] = {255, 0, 0},  -- [role] = 'color code(rgb)'
}
Config.ViewIdDistance = 10.0

Config.MouseKey = 238  -- mouse key value to interact with list(prefer not to change)
Config.ColorOnVoiceToggle = true  -- Toggle key to enable or disable color on voice active
Config.ColorCodeOnVoice = {0, 0, 255}  -- Voice Active color code value (r, g, b)

-- ## If you don't want to show any row add 'empty' ex: Config.RecentListContainer4 = 'empty' ## This will hide the 4th row of player info in recent list


Config.Cooldown = 0 -- do not change

Config.Services = {  -- Service Job Holder list
    {
        name = 'Police',
        color = '#387BFD',
        amount = 0,
        job = 'police'
    },
    {
        name = 'Ambulance',
        color = '#FF2020',
        amount = 0,
        job = 'ambulance'
    },
    {
        name = 'Mechanic',
        color = '#EEEEEE',
        amount = 0,
        job = 'mechanic'
    }
}
Config.Robberies = {  -- Robbery List
    {
        name = 'Bank Robbery',
        status = false,
        job = 'police',
        jobamount  = 1

    },
    {
        name = 'Jewellery Robbery',
        status = false,
        job = 'police',
        jobamount  = 5
    },
    {
        name = 'Pacific Bank Robbery',
        status = false,
        job = 'police',
        jobamount  = 6
    }
}