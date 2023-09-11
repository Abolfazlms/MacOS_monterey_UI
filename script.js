'use strict;';
// Calling showTime function at every second
setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
    // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    am_pm = 'AM';

    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = 'PM';
    } else if (hour == 0) {
        hr = 12;
        am_pm = 'AM';
    }

    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0' + min : min;

    let currentTime = hour + ':' + min + ' ' + am_pm;

    // Displaying the time
    document.getElementById('clock').innerHTML = currentTime;
}
function showDate() {
    let date = new Date();
    const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayOfWeek = weekday[date.getDay()];
    const dayOfMonth =
        date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    const curMonth = months[date.getMonth()];
    let todayDate = dayOfWeek + ' ' + curMonth + ' ' + dayOfMonth;
    document.getElementsByClassName('date')[0].textContent = todayDate;
}

showTime();
showDate();
