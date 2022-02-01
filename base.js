function bo(c, t, f) { if (c) return t; else return f; }
const cdi = setInterval(timerchange,100)
function timerchange()
{
    var timeleft = (1643976000-Math.floor(Date.now()/1000));
    var days = "";
    if (timeleft < 0)
    {
        document.getElementById("timer").innerHTML = ""
        document.getElementById("timerdays").innerHTML = "<span style='color:red;'>RELEASED</span>"
        clearInterval(cdi);
    }
    else
    {
        document.getElementById("timer").innerHTML = Math.floor(timeleft/3600)%24 + bo(Math.floor(timeleft/60)%60 < 10,":0",":") + Math.floor(timeleft/60)%60 + bo(timeleft%60 < 10,":0",":") + timeleft%60;
        document.getElementById("timerdays").innerHTML = Math.floor(timeleft/86400) + bo(Math.floor(timeleft/86400) > 1, " DAYS", " DAY");
    }
}
