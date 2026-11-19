//your JS code here. If required.
funtion updateTimer(){
	let now = new Date()
	let dateTime = now.toLocaleString()
	let timer = document.getElementById("timer")
	if(timer)
		timer.innerText = dateTime
}

updateTimer()
setInterval(updateTimer, 1000)