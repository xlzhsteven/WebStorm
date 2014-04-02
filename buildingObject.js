/**
 * Created by Xiaolong on 4/1/14.
 */
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];
var lighthouseRock = {
    gateClosed: true,
    weaponBulbs: superBlinders,
    capacity: 30,
    secretPassageTo: "Underwater Outpost",
    numRangers: 0
};
function addRanger(location, name, skillz, station){
    location.numRangers++;
    location["ranger" + location.numRangers] = {name: name, skillz: skillz, station: station};
}

addRanger(lighthouseRock, "Nick Walsh", "magnification burn", 2);
addRanger(lighthouseRock, "Drew Barontini", "uppercut launch", 3);
addRanger(lighthouseRock, "Christine Wong", "bomb defusing", 1);
console.log(lighthouseRock);