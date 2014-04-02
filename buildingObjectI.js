/**
 * Created by Xiaolong on 4/1/14.
 */
var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};
var vehicles = [vehicle1, vehicle2, vehicle3];
var findVehicle = function(name, list){
    for(var i = 0; i < list.length; i++){
        if(name===list[i].type){
            return list[i].storedAt;
        }
    }
};
findVehicle("Submarine", vehicles);