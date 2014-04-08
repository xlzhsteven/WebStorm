/**
 * Created by Xiaolong on 4/1/14.
 */
function Fencepost (x, y, postNum){
    this.x = 0;
    this.y = 0;
    this.postNum = undefined;
    this.connectionsTo = [];
    this.sendRopeTo = function(connectedPost){
        this.connectionsTo.push(connectedPost);
    };
}

var post18 = new Fencepost(-3, 4, 18);
var post19 = new Fencepost(5, -1, 19);
var post20 = new Fencepost(-2, 10, 20);

post18.sendRopeTo(post20);
post20.sendRopeTo(post18);
post18.sendRopeTo(post19);
post19.sendRopeTo(post18);