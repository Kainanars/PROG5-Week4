"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suite = void 0;
const Room_1 = require("./Room");
class Suite extends Room_1.Room {
    constructor(id, name, pricePerNight, maxOccupancy, hasAdditionalBed) {
        super(id, name, 'Suite', pricePerNight, maxOccupancy);
        this.hasAdditionalBed = hasAdditionalBed;
    }
    getDescription() {
        const additionalBedInfo = this.hasAdditionalBed
            ? 'Inclui cama extra.'
            : 'Não inclui cama extra.';
        return `${super.getDescription()} ${additionalBedInfo}`;
    }
}
exports.Suite = Suite;
