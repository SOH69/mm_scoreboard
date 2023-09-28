local function DiscordRequest(method, endpoint, jsondata, reason)
    local data = nil
    local FormattedToken = "Bot " .. Config.FormattedToken
    PerformHttpRequest("https://discordapp.com/api/"..endpoint, function(errorCode, resultData, resultHeaders)
		data = {data=resultData, code=errorCode, headers=resultHeaders}
    end, method, #jsondata > 0 and jsondata or "", {["Content-Type"] = "application/json", ["Authorization"] = FormattedToken, ['X-Audit-Log-Reason'] = reason})

    while not data do
        Wait(100)
    end
	
    return data
end

local function GetDiscordRoles(user, role)
    local discordId = nil
    local guildId = Config.Guild_ID

    for _, id in ipairs(GetPlayerIdentifiers(user)) do
        if string.match(id, "discord:") then
            discordId = string.gsub(id, "discord:", "")
            break;
        end
    end
    
    if discordId then
        local endpoint = ("guilds/%s/members/%s"):format(guildId, discordId)
        local member = DiscordRequest("GET", endpoint, {})
        if member.code == 200 then
            local data = json.decode(member.data)
            local roles = data.roles
            for _, v in pairs(roles) do
                if tostring(v) == tostring(role) then
                    return true
                end
            end
            return false
        else
            print("[mm_scoreboard]: Cannot establish connection to Discord")
            return false
        end
    else
        print("[mm_scoreboard]: Discord was not connected to user's Fivem account...")
        return false
    end
end

exports('GetDiscordRoles', GetDiscordRoles)