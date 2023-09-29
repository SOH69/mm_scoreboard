A scoreboard script to maintain and see other players incity! It has many features packed in one script which every RP server wants and it provides a whole new UI look, enriching user experience.


## PREVIEW:
![image](https://imgur.com/GFV70Q0.png)
![image](https://imgur.com/cDhkRks.png)
![image](https://imgur.com/ze8vy1c.png)

# DEPENDENCIES :  
1. [ox_libs](https://github.com/overextended/ox_lib)
2. Onesync
3. QBCore(for emergency service list)

# PLAYER LIST:
1. Player List stacked in one scrollable list
2. Each Player has a sublist with identifiers
3. Completely Customizable sublist
4. Recent Player List tab
5. Heads On ID View
6. Custom Color Code for priority holder
7. Combat Login checker (/combat)


# ROBBERY STATUS LIST:
1. All Robbery Status in list
2. Cooldown System
3. Service Job Active Members list
4. Completely Cuztomizable Robbery Status List

# GUIDE:
1. To Use custom color to priority holder you need to provide server guild id and bot token because it uses discord integration to check for prioty holder roles
2. To add robbery status and cooldown system you need to add these lines of code to `public/server.lua`
```lua
RegisterNetEvent("mm_scoreboard:server:banktrigger", function(status)  -- every robbery need to have individual trigger event name
    Config.Robberies[1].status = status  -- Check the config file for Config.Robberies and set the correct index for the specific robbery
    TriggerEvent("mm_robbery:server:sync", 30)  -- Need to be triggered with cooldown value for the specific robbery --[[ cooldown value in minutes here it is 30 ]]
end)
```
Next Step you need to add the trigger in the robbery script at `server side` at the corect position need coding knowledge here
[NOTE] No support will be provided if robbery script is encrypted
[NOTE] Toggle Key for List can be modified in `public/client.lua`

## Discord
https://discord.gg/Au4uAT3frK

## Tebex Store
https://master-mind.tebex.io/