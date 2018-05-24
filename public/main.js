import Device from './device.js';
import LinkStation from './link-station.js';

function findBestLinkStation(linkStations, device) {
    let stations = linkStations.sort((a, b) => b.getPower(device) - a.getPower(device));
    if (stations.length > 0 && stations[0].getPower(device) != 0) {
        console.log(`Best link station for point ${device.x},${device.y} is ${stations[0].x},${stations[0].x} with power ${stations[0].getPower(device)}`);
    } else {
        console.log(`No link station within reach for point ${device.x},${device.y}`);
    }
}

let stations = new Array();
stations.push(new LinkStation(0, 0, 10), new LinkStation(20, 20, 5), new LinkStation(10, 0, 12));

let devices = Array();
devices.push(new Device(0, 0), new Device(100, 100), new Device(15, 10), new Device(18, 18));
devices.map((device) => {
    findBestLinkStation(stations, device);
});
