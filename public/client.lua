RegisterCommand('scoreboard', function()
    TriggerEvent('mm_scoreboard:client:toggle')
end, false)

RegisterKeyMapping('scoreboard', 'Open Scoreboard', 'keyboard', 'Y') -- customizable, here value is Y

RegisterCommand('robberies', function()
    TriggerEvent('mm_scoreboard:client:toggleRobbery')
end, false)

RegisterKeyMapping('robberies', 'Check Robbery Stats', 'keyboard', 'HOME') -- customizable, here value is HOME

function StartAnim()
    exports['rpemotes']:EmoteCommandStart('notepad')
end

function EndAnim()
    exports['rpemotes']:EmoteCancel()
end