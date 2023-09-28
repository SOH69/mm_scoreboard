local show3DText = false
local AutoDisableDrawing = true
local AutoDisableDrawingTime = 60000
local DrawingTime = 60000 
local TextColor = {r=255, g=255,b=255} -- WHITE (Player Data)
local AlertTextColor = {r=255, g=0, b=0} 

local function DrawText3DSecond(x,y,z, text)
    local onScreen,_x,_y=World3dToScreen2d(x,y,z)
    SetTextScale(0.45, 0.45)
    SetTextFont(4)
    SetTextProportional(true)
    SetTextColour(AlertTextColor.r, AlertTextColor.g, AlertTextColor.b, 215)
    SetTextEntry("STRING")
    SetTextCentre(true)
    AddTextComponentString(text)
    DrawText(_x,_y)
end

local function DrawText3D(x,y,z, text)
    local onScreen,_x,_y=World3dToScreen2d(x,y,z)
    SetTextScale(0.45, 0.45)
    SetTextFont(4)
    SetTextProportional(true)
    SetTextColour(TextColor.r, TextColor.g, TextColor.b, 215)
    SetTextEntry("STRING")
    SetTextCentre(true)
    AddTextComponentString(text)
    DrawText(_x,_y)
end

local function Display(id, crds, identifier, reason)
    local displaying = true

    CreateThread(function()
        Wait(DrawingTime)
        displaying = false
	end)
	
	CreateThread(function()
        while displaying do
            Wait(5)
            local pcoords = GetEntityCoords(cache.ped)
            if #(crds - pcoords) < 15.0 and show3DText then
                DrawText3DSecond(crds.x, crds.y, crds.z+0.15, "Player Left Game")
                DrawText3D(crds.x, crds.y, crds.z, "ID: "..id.." ("..identifier..")\nReason: "..reason)
            else
                Wait(500)
            end
        end
    end)
end

RegisterNetEvent("mm_scoreboard:show", function()
    if show3DText then
        show3DText = false
    else
        show3DText = true
        if AutoDisableDrawing then
            if tonumber(AutoDisableDrawing) then
                Wait(AutoDisableDrawingTime)
            else
                Wait(15000)
            end
            show3DText = false
        end
    end
end)

RegisterNetEvent("mm_scoreboard:client:combat", function(id, crds, identifier, reason)
    Display(id, crds, identifier, reason)
end)