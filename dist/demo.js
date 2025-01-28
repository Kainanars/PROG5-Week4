"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Room_1 = require("./models/Room");
const Suite_1 = require("./models/Suite");
const standardRoom = new Room_1.Room(1, 'Quarto Simples', 'Standard', 200, 2);
const suiteRoom = new Suite_1.Suite(2, 'Suíte Presidencial', 1000, 4, true);
console.log(standardRoom.getDescription());
console.log(suiteRoom.getDescription());
const booking = {
    roomId: suiteRoom.id,
    userId: 101,
    startDate: new Date('2025-02-01'),
    endDate: new Date('2025-02-05'),
};
console.log('Reserva:', booking);
