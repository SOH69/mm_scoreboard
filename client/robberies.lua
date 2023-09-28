local function ManageNuiFocusRobbery()
    CreateThread(function()
        while scoreboardOpen do
            if MouseActive then
                DisableControlAction(0, 1, true)
				DisableControlAction(0, 2, true)
                DisableControlAction(0, 24, true)
				DisableControlAction(0, 25, true)
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

local function CooldownReset()
    CreateThread(function()
        while (Config.Cooldown > 0)  do
            Wait(60000)
            Config.Cooldown = Config.Cooldown - 1
        end
        for _, v in pairs(Config.Robberies) do
            v.status = false
        end
    end)
end

RegisterNetEvent('mm_scoreboard:client:openrobbery', function()
    if not scoreboardOpen then
        SendNUIMessage({
            action = "setRobberyVisible",
            data = {
                show = true,
                data = {
                    cooldown = Config.Cooldown,
                    robbery = Config.Robberies,
                    services = Config.Services,
                }
            }
        })
        scoreboardOpen = true
        StartAnim()
        ManageNuiFocusRobbery()
    else
        SetNuiFocus(false, false)
        SendNUIMessage({
            action = "setRobberyVisible",
            data = {
                show = false
            }
        })
        EndAnim()
        scoreboardOpen = false
    end
end)

RegisterNetEvent('mm_scoreboard:client:toggleRobbery', function()
    TriggerServerEvent('mm_robbery:server:getservicedata')
end)

RegisterNetEvent('mm_robbery:client:sync', function(data, time)
    Config.Robberies = data
    Config.Cooldown = time
    CooldownReset()
end)

RegisterNetEvent('mm_robbery:client:sync1', function(data, data1)
    Config.Services = data
    Config.Robberies = data1
    TriggerEvent('mm_scoreboard:client:openrobbery')
end)