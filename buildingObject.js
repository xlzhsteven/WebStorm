/**
 * Created by Xiaolong on 4/1/14.
 */
var rockSpearguns = {
    Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
    Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
    Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
    Firefork: {barbs: 6, weight: 8, heft: "overhand"},
    "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

function listGuns(guns){
    for (speargun in guns){
        console.log(speargun);
    }
}