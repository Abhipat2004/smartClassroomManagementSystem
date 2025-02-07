console.log("Script loaded."); // Debug log

const classroomAvailability = {
    '101': true,
    '102': true,
    '103': true
};

let selectedRoom = '';

function updateAvailability() {
    const roomList = document.getElementById('room-list');
    roomList.innerHTML = ''; // Clear previous options

    console.log("Updating availability..."); // Debug log

    for (const [room, available] of Object.entries(classroomAvailability)) {
        if (available) {
            const option = document.createElement('option');
            option.value = room;
            option.textContent = `Room ${room}`;
            roomList.appendChild(option);
        }
    }

    console.log("Available rooms updated:", roomList.innerHTML); // Debug log
}

document.getElementById('show-available-rooms').addEventListener('click', function() {
    const duration = document.getElementById('duration').value; // Get the duration
    console.log(`Duration for booking: ${duration} hours`); // Debug log

    console.log("Show Available Rooms button clicked."); // Debug log
    document.getElementById('available-rooms').style.display = 'block'; // Ensure the section is visible
    updateAvailability(); // Call to update available rooms
});

document.getElementById('room-list').addEventListener('change', function() {
    selectedRoom = this.value; // Store the selected room
    document.getElementById('book-room').style.display = 'block'; // Show the book button
});

document.getElementById('book-room').addEventListener('click', function() {
    classroomAvailability[selectedRoom] = false; // Mark the selected room as booked
    updateAvailability();
    alert(`Room ${selectedRoom} has been booked!`);
    document.getElementById('available-rooms').style.display = 'none'; // Hide available rooms
});

// Initial update of availability on page load
updateAvailability();
