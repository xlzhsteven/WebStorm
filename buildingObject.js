/**
 * Created by Xiaolong on 4/1/14.
 */
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
