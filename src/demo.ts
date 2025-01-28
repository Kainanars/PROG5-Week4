import { Room } from './models/Room';
import { Suite } from './models/Suite';
import { IBooking } from './interfaces/IBooking';

const standardRoom = new Room(1, 'Quarto Simples', 'Standard', 200, 2);
const suiteRoom = new Suite(2, 'Suíte Presidencial', 1000, 4, true);

console.log(standardRoom.getDescription());
console.log(suiteRoom.getDescription());

const booking: IBooking = {
  roomId: suiteRoom.id,
  userId: 101,
  startDate: new Date('2025-01-28'),
  endDate: new Date('2025-02-01'),
};

console.log('Reserva:', booking);
