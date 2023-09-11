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

let icons = document.querySelectorAll('.icon');
let lenght = icons.length;

icons.forEach((item, index) => {
    item.addEventListener('mouseover', (e) => {
        focus(e.target, index);
    });
    item.addEventListener('mouseleave', (e) => {
        icons.forEach((item) => {
            item.style.transform = 'scale(1) translateY(0px)';
        });
    });
});

let focus = (element, index) => {
    let previous = index - 1;
    let previous_1 = index - 2;

    let next = index + 1;
    let next_1 = index + 2;

    if (previous == -1) {
        element.style.transform = 'scale(1.5) translateY(-10px)';
    } else if (next == icons.length) {
        element.style.transform = 'scale(1.5) translateY(-10px)';
    } else {
        element.style.transform = 'scale(1.5) translateY(-10px)';
        icons[previous].style.transform = 'scale(1.2) translateY(-6px)';
        icons[previous_1].style.transform = 'scale(1.1)';
        icons[next].style.transform = 'scale(1.2) translateY(-6px)';
        icons[next_1].style.transform = 'scale(1.1)';
    }
};
