function getTimeAndDay() {
	let CurrentDate = new Date()

	hrs = CurrentDate.getHours()
	min = CurrentDate.getMinutes()
	sec = CurrentDate.getSeconds()
	if (String(hrs).length < 2) {
		hrs = `0${hrs}`;
	}
	if (String(min).length < 2) {
		min = `0${min}`;
	}
	if (String(sec).length < 2) {
		sec = `0${sec}`;
	} 

	Day = CurrentDate.toString().split(' ').slice(0, 3)
	info = {
		day: `${Day[0]}, ${Day[1]} ${Day[2]}`,
		time: `${hrs}:${min}:${sec}`
	}
	return info;
};


function setTimeAndDay() {
	time = document.querySelector('#time');
	date = document.querySelector('#date');
	info = getTimeAndDay();
	date.textContent = info.day;
	time.textContent = info.time;
	console.log(info)
}

setInterval(setTimeAndDay, 1000) 