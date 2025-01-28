export class Room {
  constructor(
    public id: number,
    public name: string,
    public type: string,
    public pricePerNight: number,
    public maxOccupancy: number
  ) {}

  getDescription(): string {
    return `${this.name} é uma ${this.type} que acomoda até ${this.maxOccupancy} pessoas por R$${this.pricePerNight} por noite.`;
  }
}
