local connectedPlayers = {}
local recentPlayers = {}

scoreboardOpen = false
MouseActive = false

-- Functions
local function DrawText3D(x, y, z, text, textColor)
	local color = { r = 220, g = 220, b = 220, alpha = 255 }
    if textColor then
        color = {r = textColor[1] or 22, g = textColor[2] or 55, b = textColor[3] or 155, alpha = textColor[4] or 255}
    end

    local onScreen,_x,_y=World3dToScreen2d(x,y,z)
    local px,py,pz=table.unpack(GetGameplayCamCoords())
    local dist = #(vector3(px,py,pz) - vector3(x,y,z))

    local scale = (1/dist)*2
    local fov = (1/GetGameplayCamFov())*100
    local scale = scale*fov

    if onScreen then
        SetTextScale(0.0*scale, 0.75*scale)
        SetTextFont(4)
        SetTextProportional(true)
        SetTextColour(color.r, color.g, color.b, color.alpha)
        SetTextDropshadow(0, 0, 0, 0, 55)
        SetTextEdge(2, 0, 0, 0, 150)
        SetTextDropShadow()
        SetTextOutline()
        SetTextEntry("STRING")
        SetTextCentre(true)
        AddTextComponentString(text)
        DrawText(_x,_y)
    end
end

local function GetPlayers()
    local players = {}
    local activePlayers = GetActivePlayers()
    for i = 1, #activePlayers do
        local player = activePlayers[i]
        local ped = GetPlayerPed(player)
        if DoesEntityExist(ped) then
            players[#players+1] = player
        end
    end
    return players
end

local function GetPlayersFromCoords(coords, distance)
    local players = GetPlayers()
    local closePlayers = {}

	coords = coords or GetEntityCoords(cache.ped)
    distance = distance or  5.0

    for i = 1, #players do
        local player = players[i]
		local target = GetPlayerPed(player)
		local targetCoords = GetEntityCoords(target)
		local targetdistance = #(targetCoords - vector3(coords.x, coords.y, coords.z))
		if targetdistance <= distance then
            closePlayers[#closePlayers+1] = player
		end
    end

    return closePlayers
end

RegisterNetEvent("QBCore:Client:OnPlayerLoaded", function()
    TriggerServerEvent("mm_scoreboard:server:AddPlayer")
end)

AddEventHandler('onResourceStart', function(resourceName)
    if GetCurrentResourceName() ~= resourceName then return end
    Wait(2000)

    TriggerServerEvent("mm_scoreboard:server:AddPlayer")
end)

AddEventHandler('onResourceStop', function(resourceName)
    if GetCurrentResourceName() ~= resourceName then return end

    EndAnim()
end)

RegisterNetEvent("mm_scoreboard:client:UpdateConnect", function(data)
    connectedPlayers = {}
    for _, v in pairs(data) do
        connectedPlayers[#connectedPlayers+1] = v
    end
end)

RegisterNetEvent("mm_scoreboard:client:UpdateRecent", function(data)
    recentPlayers = {}
    for _, v in pairs(data) do
        recentPlayers[#recentPlayers+1] = v
    end
end)

local function ManageNuiFocus()
    CreateThread(function()
        while scoreboardOpen do
            for _, player in pairs(GetPlayersFromCoords(GetEntityCoords(cache.ped), Config.ViewIdDistance)) do
                local playerId = GetPlayerServerId(player)
                local playerPed = GetPlayerPed(player)
                local playerCoords = GetEntityCoords(playerPed)
                if IsEntityVisible(playerPed) then
                    if MumbleIsPlayerTalking(player) and Config.ColorOnVoiceToggle then
                        DrawText3D(playerCoords.x, playerCoords.y, playerCoords.z + 1.0, '['..playerId..']', Config.ColorCodeOnVoice)
                    else
                        DrawText3D(playerCoords.x, playerCoords.y, playerCoords.z + 1.0, '['..playerId..']')
                    end
                end
            end

            DisableControlAction(0, 24, true)
			DisableControlAction(0, 25, true)

            if MouseActive then
                DisableControlAction(0, 1, true)
				DisableControlAction(0, 2, true)
            end

            if IsControlJustReleased(0, Config.MouseKey) then
                if not MouseActive then
                    SetNuiFocus(true, true)
                    SetCursorLocation(0.7, 0.18)
                    SetNuiFocusKeepInput(true)
                    MouseActive = true
                else
                    SetNuiFocus(false, false)
                    SetNuiFocusKeepInput(false)
                    SendNUIMessage({
                        action = "mouseleft",
                    })
                    MouseActive = false
                end
            end
            Wait(5)
        end
    end)
end

RegisterNetEvent('mm_scoreboard:client:toggle', function()
    if not scoreboardOpen then
        SendNUIMessage({
            action = "setPlayerVisible",
            data = {
                show = true,
                config = {
                    player = Config.PlayerIdentifier,
                    recent = Config.RecentIdentifier,
                },
                data = {
                    players = connectedPlayers,
                    recent = recentPlayers,
                }
            }
        })
        scoreboardOpen = true
        StartAnim()
        ManageNuiFocus()
    else
        SetNuiFocus(false, false)
        SendNUIMessage({
            action = "setPlayerVisible",
            data = {
                show = false,
            }
        })
        scoreboardOpen = false
        EndAnim()
    end
end)

RegisterNUICallback('hideUI', function(option, cb)
    scoreboardOpen = false
    EndAnim()
    SetNuiFocus(false, false)
end)