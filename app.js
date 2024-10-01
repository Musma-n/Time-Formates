function updateTime() {
    const now = new Date();

    // Formate 1
    const format1 = now.toLocaleDateString('en-US') + ' ' + now.toLocaleTimeString('en-US', { hour12: false });

    // Formate 2
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const format2 = days[now.getDay()] + ' ' + now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear() + ' ' + now.getHours() + '.' + now.getMinutes().toString().padStart(2, '0');

    // Formate 3
    const format3 = now.getFullYear() + '-' + (now.getMonth() + 1).toString().padStart(2, '0') + '-' + now.getDate().toString().padStart(2, '0') + ' ' + (now.getHours() % 12 || 12) + ':' + now.getMinutes().toString().padStart(2, '0') + ' ' + days[now.getDay()];

    // Formate 4
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const format4 = months[now.getMonth()] + ' ' + now.getDate() + 'th, ' + now.getFullYear() + ' ' + (now.getHours() % 12 || 12).toString().padStart(2, '0') + '.' + now.getMinutes().toString().padStart(2, '0') + '.' + now.getSeconds().toString().padStart(2, '0') + ' ' + (now.getHours() >= 12 ? 'PM' : 'AM');

    // Formate 5
    const format5 = now.getDate() + ' ' + months[now.getMonth()] + ' ' + now.getFullYear() + ' at ' + (now.getHours() % 12 || 12) + ':' + now.getMinutes().toString().padStart(2, '0') + ' ' + (now.getHours() >= 12 ? 'PM' : 'AM');

    document.getElementById('for1').textContent = format1;
    document.getElementById('for2').textContent = format2;
    document.getElementById('for3').textContent = format3;
    document.getElementById('for4').textContent = format4;
    document.getElementById('for5').textContent = format5;
}

setInterval(updateTime, 1000);

updateTime();