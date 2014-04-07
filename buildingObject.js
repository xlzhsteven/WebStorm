/**
 * Created by Xiaolong on 4/1/14.
 */
Array.prototype.countCattle = function(kind){
    var count = 0;
    for(var i = 0; i < this.length; i++){
        if(this[i].type.toLowerCase() === kind){
            count++;
        }
    }
    return count;
};
var canyonCows = [
    {name: "Bessie", type: "cow", hadCalf: "Burt"},
    {name: "Donald", type: "bull", hadCalf: null},
    {name: "Esther", type: "calf", hadCalf: null},
    {name: "Burt", type: "calf", hadCalf: null},
    {name: "Sarah", type: "cow", hadCalf: "Esther"},
    {name: "Samson", type: "bull", hadCalf: null},
    {name: "Delilah", type: "cow", hadCalf: null}
];
console.log(canyonCows.countCattle("bull"));
