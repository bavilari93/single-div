$(() => {
	const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const date = new Date(),
        month = months[date.getMonth()],
        day=date.getDate();
        monthDiv = `<h2>${month}</h2>`,
        dayDiv = `<h1>${day}</h1>`,
        calendar = $('.calendar');
    calendar.append(monthDiv);
    calendar.append(dayDiv);



})