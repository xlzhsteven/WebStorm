/**
 * Created by Xiaolong on 4/1/14.
 */
var genericPost = {
    x: 0,
    y: 0,
    postNum: undefined,
    connectionsTo: undefined,
    sendRopeTo: function ( connectedPost ) {
        if(this.connectionsTo == undefined){
            var postArray = [ ];
            postArray.push(connectedPost);
            this.connectionsTo = postArray;
        } else {
            this.connectionsTo.push(connectedPost);
        }
    }
};
var post8 = Object.create(genericPost);
var post9 = Object.create(genericPost);
var post10 = Object.create(genericPost);
post8.x = 0;
post8.y = -3;
post8.postNum = 8;
post8.sendRopeTo(post10);
post9.x = 6;
post9.y = 8;
post9.postNum = 9;
post9.sendRopeTo(post10);
post10.x = -2;
post10.y = 3;
post10.postNum = 10;
post10.sendRopeTo(post8);
post10.sendRopeTo(post9);
post9.numBirds = 0;
post10.weathervane = "N";
post8.lightsOn = false;
post10.lightsOn = false;
