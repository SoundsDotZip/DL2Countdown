function bo(c, t, f) { if (c) return t; else return f; }
function timerchange()
{
    var timeleft = (1643976000-Math.floor(Date.now()/1000));
    var days = "";
    document.getElementById("timer").innerHTML = Math.floor(timeleft/3600)%24 + bo(Math.floor(timeleft/60)%60 < 10,":0",":") + Math.floor(timeleft/60)%60 + bo(timeleft%60 < 10,":0",":") + timeleft%60;
    document.getElementById("timerdays").innerHTML = Math.floor(timeleft/86400) + bo(Math.floor(timeleft/86400) > 1, " DAYS", " DAY")
}
setInterval(timerchange,100)