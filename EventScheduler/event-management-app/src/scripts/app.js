document.getElementById('add-event').addEventListener('click', addEvent);

let events = [];

function addEvent() {
    const description = document.getElementById('event-description').value;
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;

    // Validate input
    if (!description || !startTime || !endTime) {
        alert('Please fill in all fields');
        return;
    }
    if (parseTime(endTime) <= parseTime(startTime)) {
        alert('End time must be after start time');
        return;
    }

    // Check for conflicts
    const conflict = events.some(event =>
        (parseTime(startTime) < parseTime(event.endTime) && parseTime(endTime) > parseTime(event.startTime))
    );

    if (conflict) {
        alert('Conflict detected: An event is already scheduled during this time.');
        return;
    }

    // Add the event if no conflicts
    const event = { description, startTime, endTime };
    events.push(event);

    // Display the updated schedule
    displayEvents();
}

function displayEvents() {
    const eventTableBody = document.getElementById('event-table').getElementsByTagName('tbody')[0];
    eventTableBody.innerHTML = ''; // Clear existing table rows

    // Sort events by start time
    events.sort((a, b) => parseTime(a.startTime) - parseTime(b.startTime));

    // Add rows for each event
    events.forEach(event => {
        const row = eventTableBody.insertRow();
        const descriptionCell = row.insertCell(0);
        const startTimeCell = row.insertCell(1);
        const endTimeCell = row.insertCell(2);

        descriptionCell.textContent = event.description;
        startTimeCell.textContent = event.startTime;
        endTimeCell.textContent = event.endTime;
    });
}

function parseTime(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours + minutes / 60; // Convert time to fractional hours for easier comparison
}

function formatTime(hour) {
    const hours = Math.floor(hour);
    const minutes = Math.round((hour - hours) * 60);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}
