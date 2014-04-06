/**
 * Created by Xiaolong on 4/1/14.
 */
var vehicle3 = {
    type: "Submarine", capacity: 8, storedAt: "Underwater Outpost",
    ranger1: { name: "Gregg Pollack", skillz: "Lasering", dayOff: "Friday"},
    ranger2: { name: "Bijan Boustani", skillz: "Roundhouse Kicks", dayOff: "Tuesday"},
    ranger3: { name: "Ashley Smith", skillz: "Torpedoing", dayOff: "Friday"},
    ranger4: { name: "Mark Krupinski", skillz: "Sniping", dayOff: "Wednesday"},
    numRangers: 4
};

function relieveDuty (vehicle, day){
    var offDuty = [];
    var onDuty = [];
    for(var i = 1; i <= vehicle["numRangers"]; i++){
        if(vehicle["ranger"+i]["dayOff"]===day){
            offDuty.push(vehicle["ranger"+i]);
            vehicle["numRangers"] -= 1;
        } else{
            onDuty.push(vehicle["ranger"+i]);
        }
        delete vehicle["ranger"+i];
    }
    for(var j = 1; j <= onDuty.length; j++){
        vehicle["ranger"+j] = onDuty[j-1];
    }
    return offDuty;
}

var offToday = relieveDuty(vehicle3, "Friday");
