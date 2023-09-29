<script lang='ts'>
    import { PLAYERS, RobberyVisible, COOLDOWN} from "@store/stores"
    import img from '../public/background.png'
    export let title = 'SCOREBOARD'
</script>

<div style = 'background: url({img})' class = "w-[20vw] h-[10vh] rounded-[8px]  flex flex-col justify-between">
    <div class = "flex justify-center items-center font text-[5vh] h-[8vh] letter-spacing-[1px] bg-lg grow mt-3 mr-2">{title}</div>
    <div class = "h-[2vh] w-full bg-black rounded-b-[8px] flex items-center px-[1vw] justify-between">
        <div class = "bg-lg-s text-[1.5vh] font font-bold">{$RobberyVisible? 'PRIORITY':'TOTAL PLAYERS ONLINE'}</div>
        <div class = "bg-lg-s text-[1.5vh] font font-bold">{$RobberyVisible? $COOLDOWN+'mins':$PLAYERS.players.length}</div>
    </div>
</div>

<style>
    .bg-lg {
        background: linear-gradient(to bottom, #ffffff, rgb(204, 204, 204), rgba(255, 255, 255, 0));
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }

    .bg-lg-s {
        background: linear-gradient(to bottom, #ffffff, rgb(204, 204, 204), rgba(255, 255, 255, 0.808));
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
</style>