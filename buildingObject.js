/**
 * Created by Xiaolong on 4/1/14.
 */
var canyonCows = [
    {name: "Bessie", type: "cow", hadCalf: "Burt"},
    {name: "Donald", type: "bull", hadCalf: null},
    {name: "Esther", type: "calf", hadCalf: null},
    {name: "Burt", type: "calf", hadCalf: null},
    {name: "Sarah", type: "cow", hadCalf: "Esther"},
    {name: "Samson", type: "bull", hadCalf: null},
    {name: "Delilah", type: "cow", hadCalf: null}
];

var valleyCows = [
    {name: "Danielle", type: "cow", hadCalf: null},
    {name: "Brittany", type: "cow", hadCalf: "Christina"},
    {name: "Jordan", type: "bull", hadCalf: null},
    {name: "Trevor", type: "bull", hadCalf: null},
    {name: "Christina", type: "calf", hadCalf: null},
    {name: "Lucas", type: "bull", hadCalf: null}
];

var forestCows = [
    {name: "Legolas", type: "calf", hadCalf: null},
    {name: "Gimli", type: "bull", hadCalf: null},
    {name: "Arwen", type: "cow", hadCalf: null},
    {name: "Galadriel", type: "cow", hadCalf: null},
    {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
];

var badlandsCows = [
    {name: "Voldemort", type: "bull", hadCalf: null},
    {name: "Maleficent", type: "cow", hadCalf: null},
    {name: "Ursula", type: "cow", hadCalf: "Draco"},
    {name: "Draco", type: "calf", hadCalf: null},
    {name: "Joker", type: "bull", hadCalf: null},
    {name: "Chucky", type: "calf", hadCalf: null},
    {name: "Samara", type: "cow", hadCalf: "Chucky"}
];
Object.prototype.noCalvesYet = function (){
    if(this.hadCalf === null && this.type === "cow"){
        return true;
    } else {
        return false;
    }
};
Array.prototype.countForBreeding = function(){
    var numToBreed = 0;
    for(var i = 0; i < this.length; i++){
        if(this[i].noCalvesYet()){
            numToBreed++;
        }
    }
    return numToBreed;
};

var numPriorityCows = canyonCows.countForBreeding() + valleyCows.countForBreeding() + forestCows.countForBreeding() + badlandsCows.countForBreeding();

console.log("Herd-merger has indicated " + numPriorityCows + " cows of top breeding priority.");