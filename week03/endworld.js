var time_is_running = false;
var time_on_clock = 10000;
var intervalId = undefined;

var start = function()
{
  time_on_clock = 10;
  intervalId = setInterval(function () {
    time_on_clock--;
    if (time_on_clock <= 0)
    {
    	time_on_clock = 0;
    	console.log("It's the end of the world!");
    	clearInterval(intervalId);
    }
	document.getElementById("time").innerHTML = time_on_clock;
}, 1000);
};

document.getElementById("startbtn").addEventListener("click",start);

