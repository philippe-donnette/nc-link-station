import Device from './device.js';

class LinkStation extends Device {
    constructor(x, y, reach) {
        super(x, y);
        this.reach = reach;
    }

    getPower(device) {
        let distance = this.getDistance(device);
        return distance > this.reach ? 0 : Math.pow(this.reach - distance, 2);
    }

    getDistance(device) {
        return Math.sqrt(Math.pow(this.x - device.x, 2) + Math.pow(this.y - device.y, 2)); 
    }
}

export default LinkStation;