const fs = require('fs');
const path = require('path');

const replaceInFile = (file, searchStr, replaceStr) => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.split(searchStr).join(replaceStr);
    fs.writeFileSync(file, content);
};

const f1 = path.join(__dirname, 'src/app/pages/admin/bookings/admin-bookings.component.html');
replaceInFile(f1, 'Suite {{ booking.roomNumber }}', '{{ booking.quantity }} Room(s)');

const f2 = path.join(__dirname, 'src/app/pages/admin/reports/reports.component.html');
replaceInFile(f2, 'track room.roomNumber', 'track room.roomId');
replaceInFile(f2, 'Suite #{{ room.roomNumber }}', 'Room ID #{{ room.roomId }}');

const f3 = path.join(__dirname, 'src/app/pages/booking-detail/booking-detail.component.html');
replaceInFile(f3, 'Suite #{{ detail.roomNumber }} |', '{{ detail.quantity }} Suite(s) |');

const f4 = path.join(__dirname, 'src/app/pages/my-bookings/my-bookings.component.html');
replaceInFile(f4, 'Suite (Suite {{ booking.roomNumber }})', 'Suite ({{ booking.quantity }} Room(s))');

const f5 = path.join(__dirname, 'src/app/pages/payment/payment.component.html');
replaceInFile(f5, 'Suite {{ currentBooking.roomNumber }}', '{{ currentBooking.quantity }} Suite(s)');

const f6 = path.join(__dirname, 'src/app/pages/room-detail/room-detail.component.html');
replaceInFile(f6, 'Suite #{{ currentRoom.roomNumber }}', '{{ currentRoom.totalRooms }} Available');
