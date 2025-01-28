import { Room } from './Room';

export class Suite extends Room {
  constructor(
    id: number,
    name: string,
    pricePerNight: number,
    maxOccupancy: number,
    public hasAdditionalBed: boolean
  ) {
    super(id, name, 'Suite', pricePerNight, maxOccupancy);
  }

  getDescription(): string {
    const additionalBedInfo = this.hasAdditionalBed
      ? 'Inclui cama extra.'
      : 'Não inclui cama extra.';
    return `${super.getDescription()} ${additionalBedInfo}`;
  }
}
